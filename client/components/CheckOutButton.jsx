import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";

const CheckOut = props => {
  const history = useHistory();
  let cartId = props.cartId;
  let total = props.total;
  // console.log(props.history);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  async function handleToken(token) {
    token.cartId = cartId;
    token.total = total;
    let { data } = await axios.post("/api/checkout", { token });
    //returns {status: success}
    console.log("DATA", data);
    if (data.status === "success") {
      dispatch(fetchCart(user.id));
      history.push("/home");
    }
  }

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
};

export default CheckOut;
