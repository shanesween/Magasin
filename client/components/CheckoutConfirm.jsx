import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/cart';

const CheckoutConfirm = props => {
  return (
    <>
      <div>
        <h1 style={{ color: 'white' }}> You Checked Out!</h1>
        <h4 style={{ color: 'white' }}> Thank You</h4>
        <p style={{ color: 'white' }}>
          {' '}
          You will be emailed your oder confirmation momentarily. If you have an
          account, you can check your order status in your profile{' '}
        </p>
      </div>
    </>
  );
};

export default CheckoutConfirm;
