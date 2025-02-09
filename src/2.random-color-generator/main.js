const hexBtn = document.querySelector(".hex-btn");
const hexValue = document.querySelector(".hex-value");
const hexContainer = document.querySelector(".hex-color-container");
const hexCopy = document.querySelector(".hex-copy");

hexBtn.addEventListener("click", () => {
  const charSet = "0123456789ABCDEF";
  let hexOutput = "";
  for (let i = 0; i < 6; i++) {
    hexOutput += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  hexValue.textContent = `#${hexOutput}`;
  hexContainer.style.backgroundColor = `#${hexOutput}`;
  hexBtn.style.color = `#${hexOutput}`;
});

hexCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  alert("Hex color copied to clipboard");
});

//////////////////////////////////////////////

const rgbBtn = document.querySelector(".rgb-btn");
const rgbContainer = document.querySelector(".rgb-color-container");
const rgbCopy = document.querySelector(".rgb-copy");
let rgbVal = "";

rgbBtn.addEventListener("click", () => {
  const redVal = document.querySelector("#red").value;
  const greenVal = document.querySelector("#green").value;
  const blueVal = document.querySelector("#blue").value;
  rgbVal = `rgb(${redVal},${greenVal},${blueVal})`;
  rgbContainer.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
  rgbBtn.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
});

rgbCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbVal);
  alert("RGB color copied to clipboard");
});
