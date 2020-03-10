import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/cart';

const CheckOut = props => {
  console.log("total in checkout", props.total);
  const history = useHistory();
  let cartId = props.cartId;
  let total = props.total;
  // console.log(cartId);
  const dispatch = useDispatch();
  async function handleToken(token) {
    token.cartId = cartId;
    token.total = total;
    let { data } = await axios.post('/api/checkout', { token });
    //returns {status: success}
    console.log('DATA', data);
    if (data.status === 'success') {
      dispatch(fetchCart());
<<<<<<< HEAD
      history.push('/home');
=======
      history.push("/home");
    } else {
      dispatch(fetchCart());
>>>>>>> ead983f22bf84dc850d97a99fba5167884e40e56
    }
  }

  // console.log(props.cart);
  // let products = props.cart.products;
  // let oos = false;
  // console.log('products', products);

  // for (let i = 0; i < products.length; i++) {
  //   let element = products[i];

  //   if (element.stock < element.orderItem.quantity) {
  //     oos = true;
  //   }
  // }

  // if (!oos) {
  return (
    <StripeCheckout
      stripeKey="pk_test_teWRja4PyjtX2iWI4KrEqw6x"
      token={handleToken}
      amount={props.total * 100}
      name="CofVeve"
      billingAddress
      shippingAddress
    />
  );
  // } else {
  //   return <h1> item oos</h1>;
  // }
};

export default CheckOut;
