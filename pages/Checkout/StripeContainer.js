import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = process.env.NODE_ENV==="development"?"pk_test_51H4WiXBuf1j0so4n39wSLM3PRhiVz99QOMUmNrvxGxRG8QG3t7kl2QMH9uhGuUeIr2J5LqMr3v4vprjJuwcSnIZt00jTX3BrSG":"pk_live_51H4WiXBuf1j0so4nxqEeNUv8iuyL9J2ggtapSP3iqDK7WKzRWQGJ10APDpVgejZ1fFHP1Gh8hpWPpYNPZuPl8PW900TZKfcbmm"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({priceList, country}) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm priceList={priceList} country={country}/>
    </Elements>
  );
};

export default Stripe;