import re
from difflib import get_close_matches
from pydent import models


class Browser(object):

    def __init__(self, session):
        self.session = session

    @property
    def item(self):
        return self.session.Item

    @property
    def sample_type(self):
        return self.session.SampleType

    def sample_list(self, sample_type_id=None):
        path = 'sample_list'
        if sample_type_id is not None:
            path += "/" + str(sample_type_id)
        return self.session.utils.aqhttp.get(path)

    def find(self, model_id):
        return self.session.Sample.find(model_id)

    def find_by_name(self, model_name):
        return self.session.Sample.find_by_name(model_name)

    def where(self, query):
        return self.session.Sample.where(query)

    def find_by_sample_type_name(self, name):
        return self.session.Sample.where({"sample_type_id": self.session.SampleType.find_by_name(name).id})

    def _search_helper(self, pattern, filter_fxn, sample_type=None, **query):
        sample_type_id = None
        if sample_type is not None:
            if isinstance(sample_type, models.SampleType):
                sample_type_id = sample_type.id
            else:
                sample_type_id = self.session.SampleType.find_by_name(sample_type).id

        if sample_type_id is not None:
            query.update({'sample_type_id': sample_type_id})

        sample_list = self.sample_list(sample_type_id)
        matches = filter_fxn(pattern, sample_list)

        if not matches:
            return []

        if query:
            query.update({"id": matches})
            return self.session.Sample.where(query)
        return self.session.Sample.find(matches)

    def search(self, pattern, ignore_case=True, sample_type=None, **query):
        """
        Performs a regular expression search of Samples

        :param pattern: regular expression pattern
        :type pattern: basestring
        :param ignore_case: whether to ignore case for regex search (default: True)
        :type ignore_case: bool
        :param sample_type: sample_type_name to filter samples (optional)
        :type sample_type: basestring
        :param query: additional query parameters to filter by
        :type query: dict
        :return: list of samples
        :rtype: list
        """
        def regex_filter(pattern, sample_list):
            matches = []
            for name in sample_list:
                args = []
                if ignore_case:
                    args.append(re.IGNORECASE)
                m = re.search(pattern, name, *args)
                if m is not None:
                    matches.append(name)
            return matches

        return self._search_helper(pattern, regex_filter, sample_type=sample_type, **query)

    def close_matches(self, pattern, sample_type=None, **query):
        """
        Finds samples whose names closely match the pattern

        :param pattern: regular expression pattern
        :type pattern: basestring
        :param sample_type: sample_type_name to filter samples (optional)
        :type sample_type: basestring
        :param query: additional query parameters to filter by
        :type query: dict
        :return: list of samples
        :rtype: list
        """
        return self._search_helper(pattern, get_close_matches, sample_type=sample_type, **query)

    def list_sample_field_values(self, samples, **query):
        """
        Lists sample field values
        :param samples:
        :type samples:
        :param query:
        :type query:
        :return:
        :rtype:
        """
        query.update({"parent_class": "Sample", "parent_id": [s.id for s in samples]})
        return self.session.FieldValue.where(query)

    def _group_by_sample_type(self, samples):
        d = {}
        for s in samples:
            arr = d.setdefault(s.sample_type_id, [])
            arr.append(s)
        return d

    def filter_samples_by_property(self, samples, properties):
        """
        Filters a list of samples by their FieldValue properties. e.g. {"T Anneal": 64}.

        .. code-block::

        # search samples
        browser.filter_samples_by_property(
            browser.search(".*GFP.*", sample_type="Fragment"),
            {"Reverse Primer": browser.find_by_name("eGFP_f")

        :param samples: list of Samples
        :type samples: list
        :param properties: dictionary of properties.
        :type properties: dict
        :return:
        :rtype:
        """
        by_stid = self._group_by_sample_type(samples)

        filtered_sample_ids = []

        for stid in by_stid:
            samps = by_stid[stid]
            sample_ids = [s.id for s in samps]

            st = self.session.SampleType.find(stid)
            for prop_name in properties:
                field_type = st.field_type(prop_name)  # necessary since FieldValues are missing field_type_ids
                if field_type:
                    fv_query = {"name": prop_name}
                    value = properties[prop_name]
                    if value:
                        if field_type.ftype == 'sample':
                            fv_query.update({'child_sample_id': value.id})
                        else:
                            fv_query.update({'value': value})
                    fvs = self.sample_field_values(sample_ids, **fv_query)
                    fv_parent_sample_ids = set([fv.parent_id for fv in fvs])
                    sample_ids = list(set(sample_ids).intersection(fv_parent_sample_ids))
            filtered_sample_ids += sample_ids
        if filtered_sample_ids == []:
            return []
        return self.session.Sample.find(filtered_sample_ids)
