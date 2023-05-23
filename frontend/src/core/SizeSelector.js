import React, { useState } from 'react';

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
     <div className="quantity">
<div className="size-selector">
    <h3>Select Size:</h3>
    <select value={selectedSize} onChange={handleSizeSelect}>
      <option value="">-- Select Size --</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="xlarge">Extra Large</option>
    </select>
    {selectedSize && <p>Selected size: {selectedSize}</p>}
  </div>
  </div>
);
};


export default SizeSelector;
