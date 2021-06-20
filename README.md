# Umbrella:
Weather app written with [vue.js](vuejs.org) and [cordova](cordova.apache.org).
<br>[OpenWeatherMap](openweathermap.org/api) is used as the weather data provider.

![](https://raw.githubusercontent.com/janml/Umbrella/main/screenshot.png)


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
