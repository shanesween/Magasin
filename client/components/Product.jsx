import React from "react";
import SingleProductModal from "./SingleProductModal";

const Product = props => {
  return (
    <div>
      <img src={props.product.imageUrl} />
      <h1>{props.product.title}</h1>
      <h2>{props.product.price}</h2>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-sm"
      >
        Details
      </button>
      <div
        className="modal fade bd-example-modal-sm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <SingleProductModal
              key={props.product.id}
              product={props.product}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
