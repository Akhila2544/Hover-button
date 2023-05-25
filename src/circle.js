import React, { useState } from 'react';
import './circle.css';


const CircleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');

  const increaseCount = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
  };

  return (
    <div className="container">
      <div className="square-container">
        <div
          className="circle"
          style={{ backgroundColor: backgroundColor }}
          onClick={increaseCount}
        >
          <div className="counter">
            <span>{counter}</span>
          </div>
          <a href="#">Click to Increase</a>
        </div>
      </div>
      <div style={{ height: '20px' }}></div>
      <button className="change-color-button" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default CircleCounter;
