// Components/Buttons/MainButton.jsx
import React from "react";

const MainButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-custom-red hover:bg-custom-red-hover text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default MainButton;
