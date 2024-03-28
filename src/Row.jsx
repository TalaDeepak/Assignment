import { useRef } from "react";
import { useState } from "react";

function Row() {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(18);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const element = useRef(null);

  function handleClick(e) {
    if (e.target.value === "bold") setIsBold((prev) => !prev);
    if (e.target.value === "italic") setIsItalic((prev) => !prev);
    if (e.target.value === "underline") setIsUnderline((prev) => !prev);
  }
  return (
    <>
      <div className=" mt-2 gap-2 px-11 grid grid-cols-2 rounded-xl">
        <div className="border-blue-200 flex justify-evenly  border-2 rounded-xl py-3">
          <button
            value="bold"
            onClick={(e) => handleClick(e)}
            className="border-green-700 border-[2px] px-2 rounded-lg text-lg font-medium text-blue-600 "
          >
            Bold
          </button>
          <button
            value="italic"
            onClick={(e) => handleClick(e)}
            className="border-green-700 border-[2px] px-2 rounded-lg text-lg font-medium text-blue-600 "
          >
            Italic
          </button>
          <button
            value="underline"
            onClick={(e) => handleClick(e)}
            className="border-green-700 border-[2px] px-2 rounded-lg text-lg font-medium text-blue-600 "
          >
            Underline
          </button>

          <div className="flex gap-2">
            <label htmlFor="font">Font Size :</label>
            <input
              id="font"
              value={size}
              min={3}
              max={100}
              onChange={(e) => {
                setSize(Number(e.target.value));
                element.current.style.fontSize = `${size}px`;
              }}
              placeholder="Font Size"
              type="number"
              onClick={(e) => handleClick(e)}
              className="border-green-700 border-[2px] text-center rounded-lg  text-blue-600 "
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="color">Color :</label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={(e) => {
                element.current.style.color = color;
                setColor(e.target.value);
              }}
              className="border-green-700 border-[2px] rounded-lg  text-blue-600 "
            />
          </div>
        </div>
        <div
          className={`border-blue-200 flex justify-center border-2 rounded-xl py-3  ${color} ${
            isUnderline ? "underline" : "no-underline"
          } ${isBold ? "font-extrabold" : "font-normal"} ${
            isItalic ? "italic" : "not-italic"
          } `}
        >
          <p ref={element} className=" text-lg text-gray-800 ">
            He&apos;s not the sharpest knife in the drawer
          </p>
        </div>
      </div>
    </>
  );
}

export default Row;
