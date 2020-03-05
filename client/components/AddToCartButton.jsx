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

  return props.stock ? (
    <button
      id="toggleCart"
      type="button"
      className="btn btn-info"
      onClick={onClick}
    >
      <em> add to cart</em>
    </button>
  ) : (
    <>
      <span
        id="myTooltip"
        data-toggle="tooltip"
        data-placement="top"
        data-animation="false"
        data-trigger="hover click"
        title="Item is out of stock."
        tabIndex="0"
      >
        <button
          id="toggleCart"
          type="button"
          className="btn btn-info"
          onClick={onClick}
          disabled
          style={{ pointerEvents: "none" }}
        >
          <em> add to cart</em>
        </button>
      </span>
    </>
  );
};

export default AddToCartButton;
