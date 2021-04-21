import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Products from "../Products/Products";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    console.log("btn ", product);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            handleAddProduct={handleAddProduct}
            product={product}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <h1>this is crat</h1>
        <h2>in cart products:{cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;
