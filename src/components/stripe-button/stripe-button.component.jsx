import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Y48gzWrjmMmRx61kEEPpSz4A006QYpSt80";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful")
  }

  return (
    <StripeCheckout 
      label="Pay now"
      name="ESHOP Clothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;