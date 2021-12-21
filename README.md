# Environment

- Angular CLI: 12.2.1
- Node: 12.22.7
- Package Manager: npm 7.20.5
- OS: linux x64
- https://codebots.com/docs/ubuntu-18-04-virtual-machine-setup
- https://mvthanoshan.medium.com/how-to-setup-angular-on-ubuntu-14633ee93a57

# Project Dependencies

- Python 3.8.10
- Cypress
- https://www.npmjs.com/package/cypress
- https://phoenixnap.com/kb/how-to-install-python-3-ubuntu

# Usage Instructions

# 1. Clone repository

```
cd ~
git clone https://github.com/TyrionSnow1911/iot-devices-dashboard.git
```

# 2. Start Backend Server

```
cd ~/iot-devices-dashboard/backend
pip3 install -r requirements.txt
python3 app.py
```

# 3. Start Client

```
cd ~/iot-devices-dashboard/frontend
npm install
ng serve
```

# Testing

```
ng e2e
ng test
```
