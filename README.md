# RingCentral JS Widget Election Demo

## Introduction
This is the demo of RingCentral JS Widget with Electron.
Build with [RingCentral Commons](https://github.com/ringcentral/ringcentral-js-integration-commons/) and [RingCentral Widget](https://github.com/ringcentral/ringcentral-js-widget).

## Dependences

* yarn
* webpack 3
* react
* redux
* electron

## How to Develop

### Clone the code
```
git clone https://github.com/embbnux/ringcentral-widget-electron.git
```

### Create api secret file in project root path
```
# api.json
{
  "appKey": "your ringcentral app key",
  "appSecret": "your ringcentral app sercet",
  "server": "ringcentral sever url, eg: https://platform.devtest.ringcentral.com",
  "redirectUri": "https://embbnux.github.io/ringcentral-widget-electron/redirect.html"
}
```

### Start server
```
yarn
# build assets file
yarn build-renderer
# start app in other console
yarn start
```

### Build Package
```
yarn package
```
You can get package in release dir.