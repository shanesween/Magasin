import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/cart';

const CheckOut = props => {
  let cartObj = {
    cartId: props.cartId,
    total: props.total,
  };
  async function handleToken(token) {
    // token.
    let { data } = await axios.post('/api/checkout', { token });
    //returns {status: success}

    // console.log(token, addresses);
    // console.log(props.cart);
  }

  return (
    <StripeCheckout
      stripeKey="pk_test_teWRja4PyjtX2iWI4KrEqw6x"
      token={handleToken}
      amount={props.total * 100000}
      name="CofVeve"
      billingAddress
      shippingAddress
    />
  );
};

export default CheckOut;
