import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

const Product = props => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
      <div className='card mb-3' style={{ maxWidth: '18rem', height: '97%' }}>
        <Link className='badge-dark' to={`/products/${props.product.id}`}>
          <img
            src={props.product.imageUrl}
            className='card-img-top img-fluid'
            style={{ height: 'inherit' }}
          />
          <div className='card-body text-center'>
            <p style={{ fontSize: '120% ' }}>{props.product.title}</p>
          </div>
        </Link>
        <div className='card-body text-center'>
          <h2 className='badge badge-pill badge-dark'>
            $ {props.product.price}
          </h2>
        </div>
        <div className='card-footer w-100 text-muted text-right'>
          <AddToCartButton
            key={props.product.id}
            product={props.product}
            stock={props.product.stock}
          />
        </div>
<<<<<<< HEAD
      </Link>
      <div className="card-body text-center">
        <h2 className="badge badge-pill badge-dark">$ {props.product.price}</h2>
      </div>
      <div className="card-footer w-100 text-muted text-right">
        <AddToCartButton
          key={props.product.id}
          product={props.product}
          stock={props.product.stock}
          // quantity={1}
        />
=======
>>>>>>> 9089ef7d4e38f552bcc58cdd1ab31a79c3c3d341
      </div>
    </div>
  );
};

export default Product;
