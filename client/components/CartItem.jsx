import React from 'react';
import RemoveButton from './RemoveButton';

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
            {/* this will become qty component*/}
            <div className='card-body'>
              <div>
                <label className='cartItem__qtyLabel'>Qty</label>
                <div>
                  <input
                    className='cartItem__qtyInput form-input-field'
                    maxLength='4'
                    value={cartItem.orderItem.quantity}
                    style={{ width: '3rem' }}
                  />
                </div>
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
          <div className='col-xs-1'>
            <div className='card-body'>
              <div className='remove_cartItem_button'>
                {/* remove item button */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer div with Remove option*/}
      <div className='float-right'>
        <ul className='list-group list-group-horizontal-lg'>
          <li className='list-group-item'>
            <RemoveButton product={cartItem} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
