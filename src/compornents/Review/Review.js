import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import ReviewItem from "./reviewItem/ReviewItem";
import "./Review.css";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };
  const handleRemoveItem = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  let thanksImg;
  if (orderPlaced) {
    thanksImg = <img src={happyImage} alt="" />;
  }
  return (
    <div className="review-container">
      <div className="item-container">
        {cart.map((pd) => (
          <ReviewItem
            handleRemoveItem={handleRemoveItem}
            key={pd.key}
            product={pd}
          ></ReviewItem>
        ))}
        {thanksImg}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="add-to-cart-btn">
            Place oder
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
