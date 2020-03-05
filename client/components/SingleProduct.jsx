import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/singleProduct";
import AddToCartButton from "./AddToCartButton";

const SingleProduct = props => {
  const product = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productId));
  }, []);

  return (
    <div>
      <h2>{product.title}</h2>
      <h4>${product.price}</h4>
      <hr />
      <div>
        <img src={product.imageUrl} />
      </div>
      <AddToCartButton />
      <h3>Origin: {product.origin} </h3>
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProduct;
