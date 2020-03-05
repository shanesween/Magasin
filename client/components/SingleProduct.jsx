import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import AddToCartButton from './AddToCartButton';
import CheckOut from './CheckOutButton';
import Review from './Review';

const SingleProduct = props => {
  const product = useSelector(state => state.product);
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productId));
  }, []);

  const reviewArr = product.reviews;
  console.log(reviewArr);

  return (
    <div>
      <div className="col">
        <h2>{product.title}</h2>
      </div>
      <div className="col text-right">
        <h4>${product.price}</h4>
        <AddToCartButton
          key={product.id}
          product={product}
          stock={product.stock}
        />
      </div>
      <hr />
      <div>
        <img src={product.imageUrl} className="img-fluid" />
      </div>
      <div className="col ">
        <h5>Origin: {product.origin} </h5>
        <p>{product.description}</p>
      </div>
      <Review product={product} />
    </div>
  );
};

export default SingleProduct;
