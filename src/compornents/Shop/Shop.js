import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Products from "../Products/Products";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  console.log(first10);
  const [ products, setProducts]= useState(first10);
  return (
    <div className="shop-container">
     <div className="product-container">
     
        {products.map((product) => (
         <Products product={product}></Products>
        ))}
    
     </div>
     <div className="cart-container"><h1>this is crat</h1></div>
    </div>
  );
};

export default Shop;
