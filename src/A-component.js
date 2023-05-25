import React, { useState } from 'react';
import B from './B-component';

const A = () => {
  const [cendol, setCendol] = useState(2);

  return (
    <div>
      <B cendol={cendol} updateCendol={setCendol} />
    </div>
  );
};

export default A;

