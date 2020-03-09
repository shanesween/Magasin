import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct } from '../store/cart';
import RemoveButton from './RemoveButton';
import Quantity from './Quantity';

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.orderItem.quantity);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateProduct(user.id, cartItem.id, quantity));
  };

  useEffect(() => handleSubmit(), [quantity]);

  return (
    <div style={{ minWidth: '96%' }}>
      <div className='card mb-3' style={{ minWidth: '90%' }}>
        <div className='row no-gutters' style={{ height: '12rem' }}>
          {/* product image column */}
          <div className='col-xs-2'>
            <div style={{ height: '12rem' }}>
              <Link to={`/products/${cartItem.id}`}>
                <img
                  className='card-img-left img-fluid'
                  src={cartItem.imageUrl}
                  alt='image'
                  style={{ height: '12rem' }}
                />
              </Link>
            </div>
          </div>
          {/* product info column */}
          <div className='col-xs-2'>
            <Link className='badge-light' to={`/products/${cartItem.id}`}>
              <div className='card-body'>
                <h5 className='card-title'>{cartItem.title}</h5>
                <p className='card-text'>{cartItem.description}</p>
                <p className='card-text'>
                  <small className='text-muted'></small>
                </p>
              </div>
            </Link>
          </div>
          {/* orderItem qty column */}
          <div className='col-xs-1'>
            <div className='card-body'>
              <div>
                <label className='cartItem__qtyLabel'>Qty</label>
                <Quantity
                  key={cartItem.id}
                  cartItem={cartItem}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
          {/* cartItem price */}
          <div className='col-xs-1'>
            <div className='card-body'>
              <label className='cartItem_priceLabel'>Unit Price</label>
              <div className='cartItem_price '>${cartItem.price}</div>
            </div>
          </div>
          {/* cartItem total price*/}
          <div className='col-xs-1'>
            <div className='card-body'>
              <label className='cartItem_priceLabel'>Item Total</label>
              <div className='cartItem_price'>${cartItem.price * quantity}</div>
            </div>
          </div>
        </div>
        {/* footer div with Remove option*/}
        <div className='text-right'>
          <RemoveButton product={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
