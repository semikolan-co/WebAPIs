const copyButton = document.querySelector('#copybutton')
const pasteButton = document.querySelector('#pastebutton')
const clearButton = document.querySelector('#clearbutton')
const pasteTextArea = document.querySelector('#pastetextarea')
const copyTextArea = document.querySelector('#copytextarea')

copyButton.addEventListener('click', () => {
  const text = copyTextArea.value
	navigator.clipboard.writeText(text)
  .then(() => {
    console.log(`"${text}" was copied to your clipboard.`)
  })
  .catch(err => {
    console.error(`Error copying text to clipboard: ${err}`)
  })
})

pasteButton.addEventListener('click', () => {
	navigator.clipboard.readText()
  .then(text => {
    pasteTextArea.value += text;
  })
  .catch(err => {
    console.error(`Error pasting clipboard's content: ${err}`)
  })
})

clearButton.addEventListener('click', () => {
  pasteTextArea.value = ''
})