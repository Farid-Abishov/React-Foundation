import React from "react";
import { Link } from 'react-router-dom'

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Iphone 13",
      price: 1500,
    },
    {
      id: 2,
      name: "Iphone 14",
      price: 2000,
    },
    {
      id: 3,
      name: "Iphone 15",
      price: 3000,
    },
  ];

  return (
    <div>
      {products.map((product, index) => {
        const { id, name, price } = product;
        return (
          <div key={index}>
            <h5>
            <Link to={`/product/${id}`}>{name}</Link>
            </h5>
            <span>{price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
