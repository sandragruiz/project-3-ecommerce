import React, { useState } from 'react';

export const ProductCard = ({ listingId, title, image, price, size }) => {
  const [showHiddenFields, setShowHiddenFields] = useState(false);

  const handleShowHiddenFields = () => {
    setShowHiddenFields(true);
  };

    return (
    <div>

      {/* visible fields */}

        <h3>{title}</h3>
        <p>{image}</p>
        <p>{price}</p>
        <p>{size}</p>

      {/* other listing information users can see once they click on the listing */}
      
      <button onClick={handleShowHiddenFields}>View</button>

      {/* Display hidden fields when button is clicked */}
      {showHiddenFields && (
        <div>
          <p>{listingId.color}</p>
          <p>{listingId.condition}</p>
          <p>{listingId.description}</p>
        </div>
      )}
      
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