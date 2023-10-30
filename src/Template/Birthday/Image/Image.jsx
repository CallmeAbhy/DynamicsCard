import React from "react";

const Image = ({ image, colour }) => {
  const rootStyle = {
    "--s": "10px", // control the size
    padding: "var(--s)",
    border: "calc(2 * var(--s)) solid #0000",
    outline: "1px solid #000",
    outlineOffset: "calc(-1 * var(--s))",
    background: "conic-gradient(from 90deg at 1px 1px, #0000 25%, #000 0)",
  };
  return (
    <center>
      {/* <div className="flex items-center justify-center h-48 w-48 bg-white rounded-full border-4 border-gray-300 overflow-hidden ">
        <img
          src={image}
          alt="Your Image"
          className="max-w-full max-h-full rounded-full"
        />
      </div> */}
      <img
        src={image}
        style={rootStyle}
        alt="Your Image"
        id="root"
        className="h-48 w-48"
      />
    </center>
  );
};

export default Image;
