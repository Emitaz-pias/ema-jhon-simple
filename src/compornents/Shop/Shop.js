import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

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
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
};

export default Shop;
