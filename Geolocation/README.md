# GeoLocation API

The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

## Using GeoLocation API

The Geolocation API can be accessed using the `navigator.geolocation` object. The following methods are available:

    * `getCurrentPosition` - Returns the current position of the user.
    * `watchPosition` - Returns the current position of the user and fires an event every time the position changes.

### getCurrentPosition

    * `getCurrentPosition(successCallback, errorCallback)` - Returns the current position of the user.
    * `successCallback` - A callback function that is called when the position is successfully retrieved.
    * `errorCallback` - A callback function that is called when there is an error.

Here is an example:

```js
const successCallback = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;
  const altitude = position.coords.altitude;
  const altitudeAccuracy = position.coords.altitudeAccuracy;
  const heading = position.coords.heading;
  const speed = position.coords.speed;
  const timestamp = position.timestamp;
  
  console.log("Position Object: " ,position);
}

const errorCallback = (error) => {
  console.log("Error: " ,error);
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```
