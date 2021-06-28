import React from "react";
import fakeData from "../../../fakeData";

const Inventory = () => {
  const handleAddProduct = () => {
    fetch("http://localhost:8080/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fakeData),
    });
  };
  return (
    <div>
      <button onClick={handleAddProduct}>add Product</button>
    </div>
  );
};

export default Inventory;
