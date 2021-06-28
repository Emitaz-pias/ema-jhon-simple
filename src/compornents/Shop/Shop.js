import React, { useEffect, useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";
const Shop = () => {
  // const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKyes = Object.keys(savedCart);
    if (products.length > 0) {
      const previousCart = productKyes.map((existingKey) => {
        const product = products.find((pdKey) => pdKey.key === existingKey);
        product.quantity = savedCart[existingKey];
        return product;
      });
      setCart(previousCart);
    }
  }, []);

  const handleAddProduct = (product) => {
    const prodcutToBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === prodcutToBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const otherProduct = cart.filter((pd) => pd.key !== prodcutToBeAdded);
      newCart = [...otherProduct, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            key={product.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={product}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="add-to-cart-btn">Review</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
