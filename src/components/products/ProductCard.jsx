import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
        <p className="text-gray-600 mb-2 truncate">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;