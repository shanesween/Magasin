import React from "react";
import { removeProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";

const RemoveButton = props => {
  // const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onClick = ev => {
    dispatch(removeProduct(props.product.id));
  };

  // console.log(props);

  return (
    <button
      className="btn btn-light"
      id="toggleCart"
      type="button"
      onClick={onClick}
    >
      <em>Remove</em>
    </button>
  );
};

export default RemoveButton;
