import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/cart';

const CheckOut = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(fetchCart(user.id));
  }, [user]);
  function handleToken(token, addresses) {
    console.log(token, addresses);
  }

  console.log(props.product);

  return (
    <StripeCheckout
      stripeKey="pk_test_teWRja4PyjtX2iWI4KrEqw6x"
      token={handleToken}
      amount={props.product.total * 100}
      name="CofVeve"
      billingAddress
      shippingAddress
    />
  );
};

export default CheckOut;
