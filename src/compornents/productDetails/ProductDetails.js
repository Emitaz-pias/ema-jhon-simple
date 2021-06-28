import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Products from "../Products/Products";

const ProductDetails = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/product/${productKey}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productKey]);
  console.log("hi thi si ", product);
  // const product = detailProduct.find((pd) => pd.key === productKey);
  return (
    <div>
      <h1>YOur product details here</h1>
      <Products showAddToCart={false} product={product}></Products>
    </div>
  );
};

export default ProductDetails;
