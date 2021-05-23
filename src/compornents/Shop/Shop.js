import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const prodcutToBeAdded = product.key;
    const sameProduct = cart.find(pd=>pd.key === prodcutToBeAdded);
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity+1;
      sameProduct.quantity=count;
      const otherProduct = cart.filter(pd=>pd.key !== prodcutToBeAdded)
      newCart =[...otherProduct,sameProduct];
    }
    else{
      product.quantity =1;
      newCart=[...cart,product];
    }
    setCart(newCart)
    addToDatabaseCart(product.key,count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            showAddToCart={true}
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
