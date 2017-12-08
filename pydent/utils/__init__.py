"""Utilities

==========
utils
==========

Submodules
==========

.. autosummary::
    :toctree: _autosummary

    magiclist
    plan_validator

"""

import pprint as pprint_module

from pydent.utils.magiclist import MagicList, magiclist

printer = pprint_module.PrettyPrinter(indent=1)
pprint = printer.pprint
pformat = printer.pformat


def filter_list(objlist, **kwargs):
    """Filters a list of objects based on attributes in kwargs"""
    intersection = []
    for obj in objlist:
        is_ok = True
        for k in kwargs:
            if not hasattr(obj, k):
                is_ok = False
                break
            if not getattr(obj, k) == kwargs[k]:
                is_ok = False
                break
        if is_ok:
            intersection.append(obj)
    return type(objlist)(intersection)


def url_build(*parts):
    """Join parts of a url into a string"""
    return '/'.join(p.strip('/') for p in parts)

# def filter_dictionary(dictionary, filter_function):
#     new_dict = {}
#     if isinstance(dictionary, dict):
#         for key, val in dictionary.items():
#             if filter_function(key, val):
#                 new_dict[key] = val
#             if isinstance(val, dict):
#                 new_dict[key] = filter_dictionary(val, filter_function)
#         return new_dict

# def ignore_none(d):
#     return filter_dictionary(d, lambda k, v: v is not None)
#
# def ignore_empty(d):
#     return filter_dictionary(d, lambda k, v: v != [])