import React from 'react';

const Quantity = ({ cartItem }) => (
  <div>
    <input
      className='cartItem__qtyInput form-input-field'
      maxLength='4'
      value={cartItem.orderItem.quantity}
      style={{ width: '3rem' }}
    />
  </div>
);

export default Quantity;
