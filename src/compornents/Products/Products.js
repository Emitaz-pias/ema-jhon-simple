import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Products = (props) => {
  const { name, img, seller, price, stock, key } = props.product;
  const showAddToCart = props.showAddToCart;

  return (
    <div className="product">
      <div>
        <img src={img} alt="product pic"></img>
      </div>
      <div>
        <h1 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h1>
        <p>by:{seller}</p>
        <p>${price}</p>
        <small>
          <p>only{stock}left in stock-order soon</p>
        </small>
        {showAddToCart && (
          <button
            onClick={() => props.handleAddProduct(props.product)}
            className="add-to-cart-btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        )}{" "}
      </div>
      <hr />
    </div>
  );
};

export default Products;
