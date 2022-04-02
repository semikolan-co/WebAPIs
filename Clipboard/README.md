# Clipboard API

The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.

### Reading clipboard

You can Read the copied thing from clipboard using the `readText` method.
Here is an example

```js
navigator.clipboard.readText().then((text) => {
  // Lastly copied data in clipboard can be accessed through text here
  console.log("Text :", text);
});
```

<hr />
