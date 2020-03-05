import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import SingleProductModal from './SingleProductModal';

const Product = props => {
  return (
    <Fade>
      <div className='card m-2' style={{ width: '18rem' }}>
        <Link className='badge-dark' to={`/products/${props.product.id}`}>
          <img
            src={props.product.imageUrl}
            className='card-img-top img-fluid'
            style={{ height: 'inherit' }}
          />
          <div className='card-body' style={{ height: '108px' }}>
            <h4 className='card-title'>{props.product.title}</h4>
          </div>
        </Link>
        <div className='card-body'>
          <h2 className='badge badge-pill badge-dark'>{props.product.price}</h2>
        </div>
        <div className='card-footer w-100 text-muted'>
          <AddToCartButton />
        </div>
      </div>
    </Fade>
  );
};

export default Product;

{
  /* <button
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
      </div> */
}
