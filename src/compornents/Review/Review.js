import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "./reviewItem/ReviewItem";

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
    <div>            <h4>total product: {cart.length}</h4>

      {cart.map((pd) => (
        <ReviewItem
        handleRemoveItem = {handleRemoveItem}
         key={pd.key} 
         product={pd}></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
