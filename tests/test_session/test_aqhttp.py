import json
import os

import pytest
import requests

from pydent.exceptions import TridentJSONDataIncomplete, TridentLoginError, TridentTimeoutError, TridentRequestError
from pydent.session import AqHTTP


@pytest.fixture(scope="function")
def aqhttp(monkeypatch, mock_post):
    """Creates a faked aqhttp"""

    monkeypatch.setattr(requests, "post", mock_post)
    login = "somelogin"
    password = "somepassword"
    aquarium_url = "http://some.aquarium.url.com"
    aqhttp = AqHTTP(login, password, aquarium_url)
    return aqhttp


def test_aqhttp_init(aqhttp):
    """Tests basic attributes of a faked aqhttp"""

    assert aqhttp.login == "somelogin"
    assert aqhttp.aquarium_url == "http://some.aquarium.url.com"
    assert aqhttp.url == "http://some.aquarium.url.com"
    assert not hasattr(aqhttp, 'password')


def test_disallow_null(aqhttp):
    """Should raise exception if json contains a null value"""

    aqhttp._disallow_null_in_json({"id": 5, "name": "Joe"})

    with pytest.raises(TridentJSONDataIncomplete):
        aqhttp._disallow_null_in_json({"id": 5, "name": None})


def test_login_bad_url():
    """Simulates an Aquarium login using a bad url. Should raise a login error."""

    aquarium_url = "This is a bad url"
    with pytest.raises(TridentLoginError):
        AqHTTP("username", "password", aquarium_url)


def test_login_wrong_url(monkeypatch):
    """Simulates an Aquarium login using a bad url. Should raise a timeout error."""

    aquarium_url = "http://52.52.52.52:81/"
    monkeypatch.setattr(AqHTTP, "TIMEOUT", 0.01)
    with pytest.raises(TridentTimeoutError):
        AqHTTP("username", "password", aquarium_url)


def test_login_no_cookie(monkeypatch):
    """Should raise LoginError if cookie is not found."""

    def mock_post(path, **kwargs):
        routes = {
            "sessions.json": {}
        }
        for key, res in routes.items():
            if key in path:
                response = requests.Response()
                response.__dict__.update(res)
                return response

    aquarium_url = "http://52.45.55.456:58/"
    monkeypatch.setattr(requests, 'post', mock_post)
    with pytest.raises(TridentLoginError):
        AqHTTP("username", "password", aquarium_url)


def test_custom_timeout(monkeypatch, aqhttp):
    """Timeout should override from the aqhttp.post method"""

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            assert timeout == 0.1
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: {}
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)
    aqhttp.post("someurl", timeout=0.1, json_data={})


def test_default_timeout(monkeypatch, aqhttp):
    """Timeout should default to aqhttp.TIMEOUT is timeout is absent from aqhttp.post"""

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            assert timeout == aqhttp.TIMEOUT
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: {}
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)
    aqhttp.post("someurl", json_data={})


def test_aqhttp_repr(aqhttp):
    repr = str(aqhttp)
    assert aqhttp.login in repr
    assert aqhttp.aquarium_url in repr


def test_aqhttp_post(monkeypatch, aqhttp):
    fake_json = {"id": 456}
    request_method = 'post'
    request_timeout = 10
    request_path = 'somepath'
    extra_kwargs = {'extra': 'stuff'}

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            # assert basic attributes are passed in
            assert method == request_method
            assert path == os.path.join(aqhttp.aquarium_url, request_path)
            assert timeout == request_timeout

            # assert extra kwargs get passed in
            kwargs_copy = dict(kwargs)
            if 'json' in kwargs:
                del kwargs_copy['json']
            assert kwargs_copy == extra_kwargs

            # return faked response
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: kwargs['json']
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)

    # test post
    json_result = aqhttp.post(request_path, json_data=fake_json, timeout=request_timeout, **extra_kwargs)
    assert json_result == fake_json


def test_aqhttp_post(monkeypatch, aqhttp):
    fake_json = {"id": 456}
    request_method = 'put'
    request_timeout = 10
    request_path = 'somepath'
    extra_kwargs = {'extra': 'stuff'}

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            # assert basic attributes are passed in
            assert method == request_method
            assert path == os.path.join(aqhttp.aquarium_url, request_path)
            assert timeout == request_timeout

            # assert extra kwargs get passed in
            kwargs_copy = dict(kwargs)
            if 'json' in kwargs:
                del kwargs_copy['json']
            assert kwargs_copy == extra_kwargs

            # return faked response
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: kwargs['json']
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)

    # test put
    json_result = aqhttp.put(request_path, json_data=fake_json, timeout=request_timeout, **extra_kwargs)
    assert json_result == fake_json


def test_aqhttp_get(monkeypatch, aqhttp):
    request_method = 'get'
    request_timeout = 10
    request_path = 'somepath'
    extra_kwargs = {'extra': 'stuff'}

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            # assert basic attributes are passed in
            assert method == request_method
            assert path == os.path.join(aqhttp.aquarium_url, request_path)
            assert timeout == request_timeout

            # assert extra kwargs get passed in
            kwargs_copy = dict(kwargs)
            if 'json' in kwargs:
                del kwargs_copy['json']
            assert kwargs_copy == extra_kwargs

            # return faked response
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: {}
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)

    # test get
    json_result = aqhttp.get(request_path, timeout=request_timeout, **extra_kwargs)


def test_improperly_formatted_json_raise_TridentRequestError(monkeypatch, aqhttp):
    """If response request returns an object that is not able to formatted to a JSON,
    a TridentRequestError should be raised."""

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            # return faked response
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: json.loads("not a json")
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)

    # test get
    with pytest.raises(TridentRequestError):
        aqhttp.post("someurl", json_data={})


def test_json_returned_with_errors(monkeypatch, aqhttp):
    """If JSON is returned with 'errors' TridentRequestError should be raised."""

    error_message = 'some error happened'

    # A fake requests sessions object
    class mock_request(object):
        @staticmethod
        def request(method, path, timeout=None, **kwargs):
            # return faked response
            fake_requests_response = requests.Response()
            fake_requests_response.json = lambda: {'errors': [error_message]}

            class Fake:
                body = 'RequestBody'

            fake_requests_response.request = Fake
            return fake_requests_response

    monkeypatch.setattr(aqhttp, '_requests_session', mock_request)

    # assert error is raised
    with pytest.raises(TridentRequestError):
        aqhttp.post("someurl", json_data={})

    # assert the error message is returned in the raised error
    try:
        aqhttp.post('ljlj', json_data={})
    except TridentRequestError as e:
        assert error_message in e.args[0]