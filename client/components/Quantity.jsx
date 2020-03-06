import React from 'react';

const Quantity = ({ handleSubmit, quantity, setQuantity }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        name='Quantity'
        type='number'
        min='1'
        max='25'
        className='form-control'
        maxLength='4'
        onChange={e => setQuantity(+e.target.value)}
        value={quantity}
        style={{ width: '4rem' }}
      />
    </form>
  </div>
);

export default Quantity;
