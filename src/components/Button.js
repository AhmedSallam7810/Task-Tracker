import React from "react";

const Button = ({ color, text, click }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={click}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "green",
  text: "close",
};

export default Button;
