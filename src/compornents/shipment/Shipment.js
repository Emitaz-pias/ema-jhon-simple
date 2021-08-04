import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { getDatabaseCart } from "../../utilities/databaseManager";
import PaymentProcess from "../PaymentProcess/PaymentProcess";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const loggedInUser = useContext(UserContext);
  const [shipmentData, setShipmentData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const onSubmit = (data) => {
    setShipmentData(data);
  };
  const handlePlaceOrder = (paymentId) => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      shipment: shipmentData,
      paymentId,
      orderTime: new Date(),
    };
    fetch("http://localhost:8080/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="row m-5">
      <div
        style={{ display: shipmentData ? "none" : "block" }}
        className="col-md-6"
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                {...register("email")}
              />
            </div>
            <br />
            <div class="col-4">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                {...register("address")}
              />
            </div>
            <br />

            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                {...register("city")}
              />
            </div>
            <br />

            <br />
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                {...register("zip")}
              />
            </div>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>

      <div
        style={{ display: shipmentData ? "block" : "none" }}
        className="col-md-6"
      >
        <PaymentProcess placeOrder={handlePlaceOrder}></PaymentProcess>
      </div>
    </div>
  );
};

export default Shipment;
