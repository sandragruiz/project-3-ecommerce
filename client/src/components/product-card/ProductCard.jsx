import React, { useState } from 'react';
import Modal from './Modal';

export const ProductCard = ({ title, image, price, size, color, condition, seller, createdAt, category_id }) => {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const hiddenFields = [color, condition, seller, createdAt, category_id];

    return (
    <div>
        <h3>{title}</h3>
        <p>{image}</p>
        <p>{price}</p>
        <p>{size}</p>

      {/* other listing information users can see once they click on the listing */}
      
      <button onClick={handleOpenModal}>View</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h3>.</h3>
          <ul>
            {hiddenFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </Modal>
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