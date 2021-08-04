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
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:8080/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKyes = Object.keys(savedCart);
    fetch("http://localhost:8080/productByKeys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productKyes),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
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
        <input
          type="text"
          onBlur={handleSearch}
          placeholder="search products"
        />

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
