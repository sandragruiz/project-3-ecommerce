import React, { useState } from 'react';

export const ProductCard = ({ title, image, price, size, hiddenFields}) => {
    const [showHiddenFields, setShowHiddenFields] = useState(false);

  const handleClick = () => {
    setShowHiddenFields(!showHiddenFields);
  };

    return (
    <div>
        <h3>{title}</h3>
        <p>{image}</p>
        <p>{price}</p>
        <p>{size}</p>
      {/* other listing information users can see once they click on the listing */}
      {showHiddenFields && (
        <ul>
        {hiddenFields.map((field, index) => (
          <li key={index}>{field}</li>
        ))}
      </ul>
      )}
      <button onClick={handleClick}>Toggle Hidden Field</button>
    </div>
);
};

/* when using the product card component in other parts of the
site we can pass the hidden fields prop with the other fields
like the description, condition, etc

<ProductCard
  title="Product Title"
  description="Product Description"
  hiddenFields={['condition', 'description', 'color']}
/>

*/