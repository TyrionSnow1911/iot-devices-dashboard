import requests
import unittest
from backend.app import seed_database
from models import get_session
from backend.sqlUtilities import SqlUtilities


class TestRoutes(unittest.TestCase):
    def test_fetch_devices(self):
        url = "http://localhost:8080/devices"
        success = None
        response = requests.get(url)
        success = response.json()["success"]
        data = response.json()["data"]
        print(data)
        code = response.status_code
        self.assertTrue(code == 200, "Correct status code received.")
        self.assertTrue(success == True, "Success equals true.")

    def test_seed_database(self):
        seed_database()
        session = get_session()
        rows = session.execute(SqlUtilities().fetchAllDevices()).fetchall()
        self.assertTrue(len(rows) == 8, "Database successfully seeded.")


if __name__ == "__main__":
    unittest.main()
