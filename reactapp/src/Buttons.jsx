// 1. Import Section (Optional for modern React, but good for CSS/Hooks)
import { useState, useEffect } from 'react'
import React from 'react';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// 2. Function Definition
const Buttons = () => {
    const [display, setDisplay] = useState("idle")
    
useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':    motor('forward');  break;
        case 'ArrowDown':  motor('backward'); break;
        case 'ArrowLeft':  motor('left');     break;
        case 'ArrowRight': motor('right');    break;
         // Spacebar to stop
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup: Remove listener if component closes to prevent memory leaks
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Logic (like click handlers) goes here
  const motor = (direction) => {
    fetch (`http://172.20.10.2:5000/${direction}`);
    setDisplay(`${direction}`);
    console.log(`${direction}`);
  }

  
  // 3. Return Section (The HTML-like JSX)
  return (
    
    <div className="button-container">
        <div>
            {display}
        </div>
      <button className="btn" onClick={() => motor("forward")}>
        <FaArrowUp />
      </button>
      <div>
        <button className="btn" onClick={() => motor("left")}>
            <FaArrowLeft />
        </button>
        <button className="btn" onClick={() => motor("backward")}>
            <FaArrowDown />
        </button>
        <button className="btn" onClick={() => motor("right")}>
            <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

// 4. Export Section
export default Buttons;
