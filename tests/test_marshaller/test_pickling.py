"""
Tests for pickling and unpickling of marshallerbase models
"""

import os
import pickle
import shutil

import pytest

from pydent.marshaller import MarshallerBase, add_schema, Relation


@pytest.fixture(scope='function')
def pickle_folder():
    here = os.path.dirname(os.path.abspath(__file__))
    pickle_folder = os.path.join(here, 'pickling_data')
    if os.path.exists(pickle_folder):
        shutil.rmtree(pickle_folder)
    os.mkdir(pickle_folder)
    return pickle_folder


@add_schema
class MyModel(MarshallerBase):
    fields = dict(
        myrelation=Relation("Anymodelname", callback="test_callback",
                            params=lambda self: (self.x, self.y))
    )

    def test_callback(self, model_name, _xy):
        x, y = _xy
        return x * y


def test_pickling_marshallerbase_model(pickle_folder):
    m = MyModel.load({"x": 4, "y": 5})
    filename = os.path.join(pickle_folder, 'mymodel.pkl')

    with open(filename, 'wb') as f:
        pickle.dump(m, f)

    m2 = None
    with open(filename, 'rb') as f:
        m2 = pickle.load(f)

    assert m2.x == m.x
    assert m2.y == m.y
    assert m2.myrelation == m.myrelation