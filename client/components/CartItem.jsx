import React from 'react';
import RemoveButton from './RemoveButton';
import Quantity from './Quantity';

const CartItem = ({ cartItem }) => {
  return (
    <div style={{ minWidth: '96%' }}>
      <div className='card mb-3' style={{ minWidth: '90%' }}>
        <div className='row no-gutters' style={{ height: '12rem' }}>
          {/* product image column */}
          <div className='col-xs-2'>
            <div style={{ height: '12rem' }}>
              <img
                className='card-img-left img-fluid'
                src={cartItem.imageUrl}
                alt='image'
                style={{ height: '12rem' }}
              />
            </div>
          </div>
          {/* product info column */}
          <div className='col-xs-2'>
            <div className='card-body'>
              <h5 className='card-title'>{cartItem.title}</h5>
              <p className='card-text'>{cartItem.description}</p>
              <p className='card-text'>
                <small className='text-muted'></small>
              </p>
            </div>
          </div>
          {/* orderItem qty column */}
          <div className='col-xs-1'>
            <div className='card-body'>
              <div>
                <label className='cartItem__qtyLabel'>Qty</label>
                <Quantity key={cartItem.id} cartItem={cartItem} />
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
              <div className='cartItem_price'>
                ${cartItem.price * cartItem.orderItem.quantity}
              </div>
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
