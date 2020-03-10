import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderItem } from '../store/orderItem';
import { fetchProduct } from '../store/singleProduct';

const SingleItem = props => {
  const item = props.item;
  const product = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(item.productId));
  }, []);

  if (item && product) {
    return (
      <Fade>
        <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <svg
                width="200"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <image href={product.imageUrl} height="150" width="150" />
              </svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <small className="text-muted">{`total: $${item.price}`}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{`QTY: ${item.quantity}`}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{`Bought: ${item.updatedAt}`}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/settings`}>
          <button type="button">BACK</button>
        </Link>
      </Fade>
    );
  }
};

export default SingleItem;
