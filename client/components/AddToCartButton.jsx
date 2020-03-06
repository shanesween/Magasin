import React, { useEffect } from "react";
import { addProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
// import ProductAddedModal from "./ProductAddedModal";
import { Link } from "react-router-dom";
import ProductAddedModal from "./ProductAddedModal";

const AddToCartButton = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addProduct(user.id, props.product.id));
  };

  return props.stock ? (
    <div>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#cartModal"
        onClick={onClick}
      >
        add to cart
      </button>
      <div>
        <div
          className="modal fade zindex-modal"
          id="cartModal"
          tabIndex="-1"
          data-backdrop="false"
          data-background="false"
          style={{ zIndexModal: 100 }}
        >
          <ProductAddedModal />
        </div>
      </div>
    </div>
  ) : (
    <div>
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
    </div>
  );
};

export default AddToCartButton;
