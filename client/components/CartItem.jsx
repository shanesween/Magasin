import React from 'react';
import RemoveButton from './RemoveButton';

const CartItem = ({ cartItem }) => {
  return (
    <div className='card mb-3' style={{ width: '90%' }}>
      <div className='row no-gutters'>
        {/* product image column */}
        <div className='col-5 col-xl-6'>
          <svg
            className='bd-placeholder-img'
            width='100%'
            height='250'
            xmlns='http://www.w3.org/2000/svg'
            aria-label='Placeholder: Image'
            preserveAspectRatio='xMidYMid slice'
            role='img'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#868e96' />
            <text x='50%' y='50%' fill='#dee2e6' dy='.3em'>
              Image
            </text>
          </svg>
        </div>
        {/* product info column */}
        <div className='col-8'>
          <div className='card-body'>
            <h5 className='card-title'>{cartItem.title}</h5>
            <p className='card-text'>{cartItem.description}</p>
            <p className='card-text'>
              <small className='text-muted'></small>
            </p>
          </div>
        </div>
        {/* orderItem qty column */}
        <div className='col-4'>
          {/* this will become qty component*/}
          <div>
            <div>
              <label className='cartItem__qtyLabel'>Qty</label>
              <div>
                <input
                  type='tel'
                  className='cartItem__qtyInput form-input-field padding_left-10 padding_right-10'
                  maxLength='4'
                  value={cartItem.orderItem.quantity}
                />
              </div>
            </div>
          </div>
        </div>
        {/* cartItem price */}
        <div className='col-4'>
          <label className='cartItem_priceLabel'>Unit Price</label>
          <div className='cartItem_price '>${cartItem.price}</div>
        </div>
        {/* cartItem total price*/}
        <div className='col-4'>
          <label className='cartItem_priceLabel'>Item Total</label>
          <div className='cartItem_price'>
            ${cartItem.price * cartItem.orderItem.quantity}
          </div>
        </div>
        <div className='col-3'>
          <div className='remove_cartItem_button'>
            {/* remove item button */}
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
