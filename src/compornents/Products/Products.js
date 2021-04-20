import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="product pic"></img>
      </div>
      <div>
        <h1 className="product-name">{name}</h1>
        <p>by:{seller}</p>
        <p>${price}</p>
        <small>
          <p>only{stock}left in stock-order soon</p>
        </small>
        <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
      <hr />
    </div>
  );
};

export default Products;
