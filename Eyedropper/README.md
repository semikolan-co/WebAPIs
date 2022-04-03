# Eye Dropper API

The EyeDropper API provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens, including outside of the browser window

### Invoking Eye Dropper

You can Instantiate `EyeDropper` Interface and open Dropper using `open()` method.
Here is an example:

```js
const ed = new EyeDropper();
ed.open().then((color) => {
  const hexCode = color.sRGBHex;
});
```
