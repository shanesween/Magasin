import React from "react";
import { Link } from "react-router-dom";

const ProductAddedModal = () => {
  return (
    <div className="modal-dialog modal-dialog-centered" role="dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="cartModal">
            Woohoo!!
          </h5>
        </div>
        <div className="modal-body text-center">Item added to your cart.</div>
        <div className="modal-footer model-footer-centered">
          <button
            id="buttonToShopping"
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Continue Shopping
          </button>
          <Link to="/cart">
            <button id="buttonToCart" type="button" className="btn btn-info">
              Go to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductAddedModal;
