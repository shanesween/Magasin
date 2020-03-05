import React from "react";
import { addProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";

const AddToCartButton = props => {
  const dispatch = useDispatch();

  const onClick = () => {
    addProduct(props.product.id);
  };
  console.log(props);

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
