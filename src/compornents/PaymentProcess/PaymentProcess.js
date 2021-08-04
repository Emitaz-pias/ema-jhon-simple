import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardElementProcessor from "./CardElementProcessor";

const stripePromise = loadStripe("pk_test_iONwyHcRVWakZiYUQOPzcA8d00C5WkKbt2");

const PaymentProcess = ({ placeOrder }) => {
  return (
    <Elements stripe={stripePromise}>
      <CardElementProcessor placeOrder={placeOrder} />
    </Elements>
  );
};

export default PaymentProcess;
