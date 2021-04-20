import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  console.log(first10);
  const [ products, setProducts]= useState(first10);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
