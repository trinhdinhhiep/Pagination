import React from "react";
import { useState, useRef } from "react";
import Item from "./RenderItem";

const Header = ({ handleCompClick }) => {
  const initRef = useRef(null);
  const handleClick = () => {
    handleCompClick({ data: true });
  };
  return (
    <div>
      {/* <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Click to hide!
      </button>
      {visible && <Item />} */}
      <input type="file" ref={initRef} />
      <button onClick={handleClick}>Click!</button>
    </div>
  );
};

export default Header;
