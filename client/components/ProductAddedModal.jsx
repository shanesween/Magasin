import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProduct } from "../store/singleProduct";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

const ProductAddedModal = props => {
  const product = props.product;

  return (
    <div>
      <div className="modal-content">
        <h5 className="modal-title">{product.title} was added to your cart</h5>
        <hr />
      </div>
      <div className="modal-body">
        <div className="row justify-content-between">
          <div className="row justify-content-between">
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

export default ProductAddedModal;

// <div className="modal-body">
//   <div className="row justify-content-between">
//     <div className="col">
//       <Link to={`/products/${props.product.id}`}>
//         <h2>{props.product.title}</h2>
//       </Link>
//     </div>
//     <div className="col text-right">
//       <h4>${props.product.price}</h4>
//     </div>
//     <hr />
//     <div>
//       <Link to={`/products/${props.product.id}`}>
//         <img src={props.product.imageUrl} className="img-fluid" />
//       </Link>
//     </div>
//     <div className="col ">
//       <h5>Origin: {props.product.origin} </h5>
//       <p>{props.product.description}</p>
//     </div>
//     <p>{props.product.reviews}</p>
//   </div>
// </div>
