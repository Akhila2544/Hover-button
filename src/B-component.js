

import React from 'react';

const B = ({ cendol, updateCendol }) => {
  const handleClick = () => {
    updateCendol(cendol + 10);
  };

  return (
    <div>
      <p>Value of cendol from Component A: {cendol}</p>
      <button onClick={handleClick}>Increment by 10</button>
    </div>
  );
};

export default B;
