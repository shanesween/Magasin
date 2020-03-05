import React, { useEffect } from "react";
import { addProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
// import ProductAddedModal from "./ProductAddedModal";
import { Link } from "react-router-dom";

const AddToCartButton = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addProduct(user.id, props.product.id));
  };

  // console.log(props.product);
  // console.log(user);

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
      <div
        className="modal fade bd-example-modal-sm"
        id="cartModal"
        data-backdrop="false"
        tabIndex="-1"
        role="document"
      >
        <div
          className="modal-dialog modal-dialog-centered style={{zIndex:'1'}} "
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalCenterTitle">
                Woohoo!!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {props.product.title} was added to your cart.
            </div>
            <div className="modal-footer">
              <Link to="/home">
                <button
                  type="button"
                  className="btn btn-info"
                  data-dismiss="modal"
                >
                  Continue Shopping
                </button>
              </Link>
              <div className="col">
                <Link to="/cart">
                  <button type="button" className="btn btn-info">
                    Go to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
