class SqlUtilities:
    FETCH_ALL_DEVICES = "select * from device_data;"

    def __init__(self) -> None:
        pass

    def fetchAllDevices(self):
        return self.FETCH_ALL_DEVICES
