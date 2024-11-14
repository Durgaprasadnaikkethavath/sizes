import React from "react";
import "./SizeSelector.css";

function SizeSelector({ sizes }) {
  return (
    <p
      className={`size-option ${sizes.includes("S") ? "bg-pink" : "bg-slate"}`}
    >
      S
    </p>
  );
}

export default SizeSelector;
