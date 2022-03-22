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
