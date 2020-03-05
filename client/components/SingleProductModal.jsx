import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProduct } from "../store/singleProduct";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

const SingleProductModal = props => {
  // const product = useSelector(state => state.product);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProduct(props.match.params.productId));
  // }, []);

  return (
    <div className="modal-body">
      <div className="row justify-content-between">
        <div className="col">
          <Link to={`/products/${props.product.id}`}>
            <h2>{props.product.title}</h2>
          </Link>
        </div>
        <div className="col text-right">
          <h4>${props.product.price}</h4>
          <AddToCartButton key={props.product.id} product={props.product} />
        </div>
        <hr />
        <div>
          <Link to={`/products/${props.product.id}`}>
            <img src={props.product.imageUrl} className="img-fluid" />
          </Link>
        </div>
        <div className="col ">
          <h5>Origin: {props.product.origin} </h5>
          <p>{props.product.description}</p>
        </div>
        <p>{props.product.reviews}</p>
      </div>
    </div>
  );
};

export default SingleProductModal;
