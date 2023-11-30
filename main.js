let outputRed = document.getElementById("output-red");
let outputGreen = document.getElementById("output-green");
let outputBlue = document.getElementById("output-blue");
// let outputHex = document.getElementById("output-hex");

let button = document.getElementById("acctivate");
// let buttonHex = document.getElementById("acctivate-hex");

function calculateInitialValueDep(color, backgroundColor, opacity) {
  let value = color * opacity + backgroundColor * (1 - opacity);
  return Math.round(value);
}

function calculateInitialValue(color, backgroundColor, opacity) {
  let delta = 1 - opacity;
  let background = backgroundColor * delta;
  let value = (color - background) / opacity;
  return Math.round(value);
}

// function hexToRgb(hexColor) {
//   // Validate input
//   hexColor = hexColor.replace(/^#/, "");
//   if (!/^[0-9A-Fa-f]{6}$/.test(hexColor)) {
//     throw new Error("Invalid hex color format.");
//   }

//   // Convert to RGB
//   const r = parseInt(hexColor.substring(0, 2), 16);
//   const g = parseInt(hexColor.substring(2, 4), 16);
//   const b = parseInt(hexColor.substring(4, 6), 16);

//   return { r, g, b };
// }

// function rgbToHex(r, g, b) {
//   // Validate input

//   // Convert to hexadecimal
//   const toHex = (value) => {
//     const hex = value.toString(16);
//     return hex.length === 1 ? "0" + hex : hex;
//   };

//   const hexR = toHex(r);
//   const hexG = toHex(g);
//   const hexB = toHex(b);

//   return `#${hexR}${hexG}${hexB}`;
// }

//   buttonHex.addEventListener("click", () => {
//     let opacity = document.getElementById("opacity__input").value;
//     let hexInput = document.getElementById("color__input--hex").value;
//     let backgroundInputHex = document.getElementById("bg__input--hex").value;
//     let hexInputToRgb = hexToRgb(hexInput);
//     let backgroundInputHexToRgb = hexToRgb(backgroundInputHex);

//     let red = calculateInitialValue(hexInputToRgb.r, backgroundInputHexToRgb.r, opacity);
//     console.log(red);
//     let green = calculateInitialValue(hexInputToRgb.g, backgroundInputHexToRgb.g, opacity);
//     console.log(green);
//     let blue = calculateInitialValue(hexInputToRgb.b, backgroundInputHexToRgb.b, opacity);
//     console.log(blue);
    
//      outputHex.innerText = rgbToHex(red, green, blue);
//   });

button.addEventListener("click", () => {
  let opacity = document.getElementById("opacity__input").value;
  let colorInputRed = document.getElementById("color__input--red").value;
  let colorInputGreen = document.getElementById("color__input--green").value;
  let colorInputBlue = document.getElementById("color__input--blue").value;
  let backgroundInputRed = document.getElementById("bg__input--red").value;
  let backgroundInputGreen = document.getElementById("bg__input--green").value;
  let backgroundInputBlue = document.getElementById("bg__input--blue").value;

  outputRed.innerText = calculateInitialValue(
    colorInputRed,
    backgroundInputRed,
    opacity
  );
  outputGreen.innerText = calculateInitialValue(
    colorInputGreen,
    backgroundInputGreen,
    opacity
  );
  outputBlue.innerText = calculateInitialValue(
    colorInputBlue,
    backgroundInputBlue,
    opacity
  );
});
