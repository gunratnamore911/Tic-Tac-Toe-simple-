import React from "react";

const style = {
  background: "#fff",
  borer: "2px solid darkblue",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
