import { useState } from "react";
import "./style.css";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#00ff33");

  function generateRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    //#123456
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomIndex(hex.length)];
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  function handleRgbColor() {
    let r = generateRandomIndex(256);
    let g = generateRandomIndex(256);
    let b = generateRandomIndex(256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  }

  return (
    <div className="container" style={{ background: color }}>
      <div className="btn-group">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
        >
          Generate Random Color
        </button>
      </div>
      <h1 className="color-text">{color}</h1>
    </div>
  );
}

export default RandomColor;
