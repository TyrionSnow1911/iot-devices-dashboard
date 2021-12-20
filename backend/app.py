import os
import json
from flask_cors import CORS
from flask import Flask
from sqlUtilities import SqlUtilities
from models import get_session, create_all, Device


app = Flask(__name__)
CORS(app)
deviceTable = Device()


def seed_database():
    global deviceTable
    cwd = os.getcwd()
    pathToDataFeed = os.path.join(cwd, "data/feed.json")
    with open(pathToDataFeed) as f:
        data = json.load(f)
    count = 0
    for row in data:
        session = get_session()
        deviceTable.device_id = str(count)
        deviceTable.name = row["name"]
        deviceTable.status = row["status"]
        deviceTable.temperature = row["temperature"]
        deviceTable.type = row["type"]
        session.merge(deviceTable)
        session.commit()
        count += 1
    session.close()


@app.route("/devices", methods=["GET"])
def fetchDevices():
    global deviceTable
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
