# Battery Status API

The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change.

It is accesible by using `navigator.getBattery()` in the browser.
It return a Promise that resolves with a `BatteryManager` object.

Example: Using the Battery API

```js
navigator.getBattery().then((battery) => {
  // here battery is a BatteryManager object
  console.log(battery);
});
```
<hr />

### BatteryManager Object Properties

BatteryManager has the following properties:
- `charging`: `boolean` - Whether the battery is currently being charged.
- `chargingTime`: `number` - The amount of time, in seconds, that will be required to fully charge the battery.
- `dischargingTime`: `number` - The amount of time, in seconds, that the battery is expected to last when not being charged.
- `level`: `number` - A number between 0 and 1 that represents the current battery level.

Example: Using BatteryManager Properties

```js
navigator.getBattery().then((battery) => {

    // Taking Properties in Variables
    const isCharging = battery.charging;
    const level = battery.level;
    const chargingTime = battery.chargingTime;
    const dischargingTime = battery.dischargingTime;
    
    // Displaying them in console
    console.log("isCharging: " + isCharging);
    console.log("level: " + level);
    console.log("chargingTime: " + chargingTime);
    console.log("dischargingTime: " + dischargingTime);

});
```
<hr />

### BatteryManager Events

BatteryManager has the following events:
- `chargingchange` - Fired when the charging state changes.
- `chargingtimechange` - Fired when the charging time changes.
- `dischargingtimechange` - Fired when the discharging time changes.
- `levelchange` - Fired when the battery level changes.

Example: Using BatteryManager Events

```js
navigator.getBattery().then((battery) => {

    // chargingchange event
    battery.addEventListener('chargingchange', (event) => {
        console.log("chargingchange: " + event.target.charging);
    });

    // chargingtimechange event
    battery.addEventListener('chargingtimechange', (event) => {
        console.log("chargingtimechange: " + event.target.chargingTime);
    });

    // dischargingtimechange event
    battery.addEventListener('dischargingtimechange', (event) => {
        console.log("dischargingtimechange: " + event.target.dischargingTime);
    });
    
    // levelchange event
    battery.addEventListener('levelchange', (event) => {
        console.log("levelchange: " + event.target.level);
    });

});
