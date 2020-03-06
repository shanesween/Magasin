import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
// import SingleProductModal from "./SingleProductModal";

const Product = props => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <Link className="badge-dark" to={`/products/${props.product.id}`}>
        <img
          src={props.product.imageUrl}
          className="card-img-top img-fluid"
          style={{ height: "inherit" }}
        />
        <div className="card-body text-center">
          <h4 className="card-title">{props.product.title}</h4>
        </div>
      </Link>
      <div className="card-body text-center">
        <h2 className="badge badge-pill badge-dark">$ {props.product.price}</h2>
      </div>
      <div className="card-footer w-100 text-muted text-right">
        <AddToCartButton
          key={props.product.id}
          product={props.product}
          stock={props.product.stock}
        />
      </div>
    </div>
  );
};

export default Product;
