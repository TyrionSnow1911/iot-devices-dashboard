import requests
import unittest


class TestRoutes(unittest.TestCase):
    def test_fetch_device_details(self):
        print("running fetch user details test...")
        url = "http://localhost:8080//devices/:id"
        success = None
        device_id = {"device_id": 0}
        response = requests.get(url, params=device_id)
        success = response.json()["success"]
        data = response.json()["data"]
        print(data)
        code = response.status_code
        self.assertTrue(code == 200, "Correct status code received.")
        self.assertTrue(success == True, "Success equals true.")

    def test_fetch_device_data(self):
        url = "http://localhost:8080/devices"
        success = None
        response = requests.get(url)
        success = response.json()["success"]
        data = response.json()["data"]
        print(data)
        code = response.status_code
        self.assertTrue(code == 200, "Correct status code received.")
        self.assertTrue(success == True, "Success equals true.")


if __name__ == "__main__":
    unittest.main()
