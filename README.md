# Dependencies

- Python 3.8.10
- Installation Instuctions:
  https://phoenixnap.com/kb/how-to-install-python-3-ubuntu
- Angular CLI: 12.2.1
- Node: 12.22.7
- Package Manager: npm 7.20.5
- OS: linux x64
  Installation Instructions:
  https://mvthanoshan.medium.com/how-to-setup-angular-on-ubuntu-14633ee93a57

# Usage Instructions

# Clone repository

cd ~
git clone https://github.com/TyrionSnow1911/iot-devices-dashboard.git

# Start Backend Server

cd ~/iot-devices-dashboard/backend
pip3 install -r requirements.txt
python3 app.py

# Start Client

cd ~/iot-devices-dashboard/frontend
npm install
ng serve

# Testing

ng e2e
ng test
