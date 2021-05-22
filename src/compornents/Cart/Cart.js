import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, product) => total + product.price, 0);
  let shiping = 0;
  if (total > 35) {
    shiping = 0;
  } else if (total > 15) {
    shiping = 4.99;
  } else if (total > 0) {
    shiping = 12.99;
  }
  let tax = total / 10;
  const grandTotal = total + shiping + tax;
  const numberFormatter = (num) => {
    const persistence = num.toFixed(2);
    return Number(persistence);
  };
  return (
    <div>
      <h1>Order summary</h1>
      <h2>Total itmes Ordered :{cart.length}</h2>
      <h3>Total Product price :{numberFormatter(total)}</h3>
      <h3>Shping:{numberFormatter(shiping)}</h3>
      <h3>Tax + VAT :{numberFormatter(tax)}</h3>
      <h3>Total:{numberFormatter(grandTotal)}</h3>
    </div>
  );
};

export default Cart;
