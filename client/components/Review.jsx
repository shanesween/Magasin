import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import AddToCartButton from './AddToCartButton';

const Review = props => {
  const product = useSelector(state => state.product);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProduct(props.match.params.productId));
  // }, []);

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Product Review</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>

        <a href="#" class="btn btn-primary">
          Leave A Review
        </a>
      </div>
    </div>
  );
};

export default Review;
