# Umbrella:
Weather app written in vue.js running with the help of cordova.
<br>"Open Weather Map" is used as the provider for the weather data.

![alt text](https://raw.githubusercontent.com/janml/Umbrella/main/screenshot.png)


## Setup:
Install JavaScript packages with npm:
```bash
npm i
```
Run webpack dev server with hot-reload:
```bash
npm run dev
```
Create a production build:
```bash
npm run build
```
Build with cordova for android platform:
```bash
cordova prepare
cordova build android
```
