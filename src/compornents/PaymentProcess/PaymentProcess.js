import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_iONwyHcRVWakZiYUQOPzcA8d00C5WkKbt2");

const PaymentProcess = () => {
  return <Elements stripe={stripePromise}></Elements>;
};

export default PaymentProcess;