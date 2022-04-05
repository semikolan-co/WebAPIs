const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const hexInfo = document.querySelector(".hex-info");
const body = document.querySelector("body");
const message = document.createElement("p");
function showNoSupport() {
  message.classList.add("error");
  message.innerHTML =
    '😕 Your browser does not support the <a href="" target="_blank" rel="noopener">EyeDropper API.<a/>';
  body.appendChild(message);
}

function dropper() {
  const eyeDropper = new EyeDropper();

  function showResult(hex = "#FFFFFF") {
    container.style.backgroundColor = hex;
    hexInfo.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  btn.addEventListener("click", openDropper);
}

function init() {
  if (window.EyeDropper) {
    dropper();
  } else {
    showNoSupport();
  }
}

init();
