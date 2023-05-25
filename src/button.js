import React, { useState } from 'react';
import './button.css';

const Button = () => {
  const [isButtonActive, setButtonActive] = useState(false);

  const Boolean = () => {
    setButtonActive(prevState => !prevState);
  };

  return (
    <div>
      <button
        className={isButtonActive ? 'active-button' : 'inactive-button'}
        onClick={Boolean}
      >
        Boolean
      </button>
    </div>
  );
};

export default Button;
