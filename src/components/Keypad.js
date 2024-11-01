// components/Keypad.js

import React from "react";

function Keypad() {
  // Event handler function
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input
        type="password"
        onChange={handleChange}
        placeholder="Enter your password"
      />
    </div>
  );
}

function Keypad() {
  return <div></div>;
}

export default Keypad;
