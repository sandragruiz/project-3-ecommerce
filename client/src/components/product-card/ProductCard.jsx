import React from "react";


export const ProductCard = ({ listing }) => {
  return (
    <a key={listing.id} href={listing.href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{listing.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{listing.price}</p>
    </a>
  );
};



//import React, { useState } from 'react';

/*export const ProductCard = ({ listingId, title, image, price, size }) => {
  const [showHiddenFields, setShowHiddenFields] = useState(false);

  const handleShowHiddenFields = () => {
    setShowHiddenFields(true);
  };

    return (
    <div>

       {/*visible fields

        <h3>{title}</h3>
        <p>{image}</p>
        <p>{price}</p>
        <p>{size}</p>

      //{/* other listing information users can see once they click on the listing */
      
      //<button onClick={handleShowHiddenFields}>View</button>

      /*Display hidden fields when button is clicked */
      //{showHiddenFields && (
        //<div>
        //  <p>{listingId.color}</p>
         // <p>{listingId.condition}</p>
        //  <p>{listingId.description}</p>
       // </div>
     // )}
      
   // </div>
////  );
//};

/* when using the product card component in other parts of the
site we can pass the hidden fields prop with the other fields
like the description, condition, etc

<ProductCard
  title="Product Title"
  description="Product Description"
  hiddenFields={['condition', 'description', 'color']}
/>

*/