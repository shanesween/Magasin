import React from "react";
import { Link } from "react-router-dom";

const ProductAddedModal = () => {
  return (
    <div className="modal-dialog modal-dialog-centered" role="dialog">
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
        <div className="modal-body text-center">Item added to your cart.</div>
        <div className="modal-footer">
          <Link to="/home">
            <button
              id="buttonToShopping"
              type="button"
              className="btn btn-info"
              data-dismiss="modal"
            >
              Continue Shopping
            </button>
          </Link>
          <div className="col">
            <Link to="/cart">
              <button id="buttonToCart" type="button" className="btn btn-info">
                Go to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAddedModal;
