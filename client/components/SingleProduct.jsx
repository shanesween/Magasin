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
    <div className='container-fluid mt-4'>
      <div className='row' style={{ height: '30rem' }}>
        <div className='col-sm'>
          <img
            src={product.imageUrl}
            className='img-fluid float-right'
            style={{ height: '30rem' }}
          />
        </div>
        <div className='col-sm'>
          <div className='row' style={{ height: '12rem' }}></div>
          <div className='row'>
            <div className='container ml-2'>
              <div className='row'>
                <h2>{product.title}</h2>
              </div>
              <div className='row'>
                <h5>{product.origin} </h5>
              </div>
              <div className='row'>
                <p>{product.description}</p>
              </div>
              <div className='row'>
                <h4>${product.price}</h4>
              </div>
            </div>
          </div>
          <div className='row'>
            <AddToCartButton key={product.id} product={product} stock={product.stock} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='row'>
          <Review product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
