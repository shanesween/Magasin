import React, { useEffect } from "react";
import { addProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
import ProductAddedModal from "./ProductAddedModal";
import { Link } from "react-router-dom";

const AddToCartButton = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addProduct(user.id, props.product.id));
  };

  // console.log(props.product);
  // console.log(user);

  return (
    <div>
      <button
        id="toggleCart"
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target=".bd-example-modal-sm"
        onClick={onClick}
      >
        <em> add to cart</em>
      </button>
      <div
        className="modal fade bd-example-modal-sm"
        id="CartModal"
        data-backdrop="false"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
  );
};

export default AddToCartButton;

// {/* <ProductAddedModal product={props.product} /> */}
