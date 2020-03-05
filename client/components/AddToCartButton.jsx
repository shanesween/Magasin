import React, { useEffect } from "react";
import { addProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";

const AddToCartButton = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addProduct(user.id, props.product.id));
  };

  // console.log(props.product);
  // console.log(user);

  return (
    <button
      id="toggleCart"
      type="button"
      className="btn btn-outline-success"
      onClick={onClick}
    >
      <em> Add to your cart</em>
    </button>
  );
};

export default AddToCartButton;
