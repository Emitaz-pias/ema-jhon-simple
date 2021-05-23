import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "./reviewItem/ReviewItem";
import "./Review.css"
import Cart from "../Cart/Cart";
const Review = () => {
  const [cart, setCart] = useState([]);
    const handleRemoveItem =(productKey)=>{
       const newCart = cart.filter(pd=>pd.key!==productKey)
       setCart(newCart)
       removeFromDatabaseCart(productKey)
    }
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
  return (
    <div className="review-container">           
      <div className="item-container">{cart.map((pd) => (
        <ReviewItem
        handleRemoveItem = {handleRemoveItem}
         key={pd.key} 
         product={pd}></ReviewItem>
      ))}</div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
