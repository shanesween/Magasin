import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/singleProduct";
import AddToCartButton from "./AddToCartButton";
import CheckOut from "./CheckOutButton";

const SingleProduct = props => {
  const product = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productId));
  }, []);

  return (
    <div>
      <div className="col">
        <h2>{product.title}</h2>
      </div>
      <div className="col text-right">
        <h4>${product.price}</h4>
        <AddToCartButton key={product.id} product={product} />
      </div>
      <hr />
      <div>
        <img src={product.imageUrl} className="img-fluid" />
      </div>
      <div className="col ">
        <h5>Origin: {product.origin} </h5>
        <p>{product.description}</p>
      </div>
      <p>{product.reviews}</p>
    </div>
  );
};

export default SingleProduct;
