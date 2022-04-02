const copyButton = document.querySelector("#copybutton");
const pasteButton = document.querySelector("#pastebutton");
const clearButton = document.querySelector("#clearbutton");
const pasteTextArea = document.querySelector("#pastetextarea");
const copyTextArea = document.querySelector("#copytextarea");

copyButton.addEventListener("click", () => {
  const text = copyTextArea.value;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("Copied to clipboard!");
      console.log(`"${text}" was copied to your clipboard.`);
    })
    .catch((err) => {
      console.error(`Error copying text to clipboard: ${err}`);
    });
});

pasteButton.addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((text) => {
      pasteTextArea.value += text;
      showToast(`"${text}" was pasted from your clipboard.`);
    })
    .catch((err) => {
      console.error(`Error pasting clipboard's content: ${err}`);
    });
});

clearButton.addEventListener("click", () => {
  pasteTextArea.value = "";
});

document.addEventListener("copy", (event) => {
 showToast("Copied to clipboard!");
});
document.addEventListener("paste", (event) => {
  showToast("Pasted from clipboard!");
});
document.addEventListener("cut", (event) => {
  showToast("Cut to clipboard!");
});


const showToast = (text) => {
  Toastify({
    text: text,
    gravity: "bottom",
    position: "center",
    style: {
      background: "linear-gradient(to right, var(--LightSlate), var(--LightestSlate))",
      color: "var(--Navy)",
      fontWeight: "bold",
      fontFamily: "monospace",
      borderRadius: "5px",
    }
  }).showToast();
}