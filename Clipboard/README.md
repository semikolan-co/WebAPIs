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

### Writing to clipboard

You can write to the clipboard using the `writeText` method.
Here is an example:

```js
const textYouWantToCopy = "Hello World";
navigator.clipboard.writeText(textYouWantToCopy).then(() => {
  console.log("Text copied to clipboard");
});
```

<hr />

### Asynchronous Clipboard Events

You can listen to clipboard events using the `addEventListener` method.
Here is an example:

```js
// Listen for clipboard changes

// When user copies something to clipboard
document.addEventListener("copy", (event) => {
  console.log("Text copied to clipboard");
});

// When user cuts something to clipboard
document.addEventListener("cut", (event) => {
  console.log("Text cut to clipboard");
});

// When user pastes something to clipboard
document.addEventListener("paste", (event) => {
  console.log("Text pasted to clipboard");
});
```
