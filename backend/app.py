import os
import json
from flask_cors import CORS
from flask import Flask
from utilities.sqlUtilities import SqlUtilities
from models import get_session, create_all, DeviceData


app = Flask(__name__)
CORS(app)
deviceData = DeviceData()


def seed_database():
    global deviceData
    cwd = os.getcwd()
    pathToDataFeed = os.path.join(cwd, "data/feed.json")
    with open(pathToDataFeed) as f:
        data = json.load(f)
    count = 0
    for row in data:
        session = get_session()
        deviceData.device_id = str(count)
        deviceData.name = row["name"]
        deviceData.status = row["status"]
        deviceData.temperature = row["temperature"]
        deviceData.type = row["type"]
        session.merge(deviceData)
        session.commit()
        count += 1
    session.close()


@app.route("/devices", methods=["GET"])
def fetchDeviceData():
    global deviceData
    session = get_session()
    rows = session.execute(SqlUtilities().fetchAllDevices()).fetchall()

    result = []
    for row in rows:
        data = {}
        data["device_id"] = row[0]
        data["name"] = row[1]
        data["status"] = row[2]
        data["temperature"] = row[3]
        data["type"] = row[4]
        result.append(data)

    return json.dumps({"success": True, "data": result}), 200


if __name__ == "__main__":
    if not os.path.exists("app.db"):
        create_all()
    seed_database()
    app.run(host="localhost", port=8080, debug=True)
