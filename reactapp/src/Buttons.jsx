// 1. Import Section (Optional for modern React, but good for CSS/Hooks)
import { useState } from 'react'
import React from 'react';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// 2. Function Definition
const Buttons = () => {
    const [display, setDisplay] = useState("idle")
    

  
  // Logic (like click handlers) goes here
  const forward = () => {
    fetch ("http://172.20.10.2:5000/forward");
    setDisplay("Forward");
    console.log("Forward!");
  };
  const left = () => {
    fetch ("http://172.20.10.2:5000/left");
    setDisplay("Left");
    console.log("Left");
  };
  const backward = () => {
    fetch ("http://172.20.10.2:5000/backward");
    setDisplay("Backward");
    console.log("Backward");
  };
  const right = () => {
    fetch ("http://172.20.10.2:5000/right");
    setDisplay("Right");
    console.log("Right");
  };

  // 3. Return Section (The HTML-like JSX)
  return (
    
    <div className="button-container">
        <div>
            {display}
        </div>
      <button className="btn" onClick={forward}>
        <FaArrowUp />
      </button>
      <div>
        <button className="btn" onClick={left}>
            <FaArrowLeft />
        </button>
        <button className="btn" onClick={backward}>
            <FaArrowDown />
        </button>
        <button className="btn" onClick={right}>
            <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

// 4. Export Section
export default Buttons;
