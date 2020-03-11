import React, { useEffect } from 'react';

function toggleClassName(id, className1, className2, conditional) {
  let element = document.getElementById(id);
  if (conditional) {
    !element.classList.value.includes(className1) &&
      element.classList.add(className1);
    element.classList.remove(className2);
  } else {
    !element.classList.value.includes(className2) &&
      element.classList.add(className2);
    element.classList.remove(className1);
  }
}

const Quantity = ({ quantity, stock, handleChange, qtyId }) => {
  let conditional = quantity > 0 && quantity <= Math.floor(stock * 0.8),
    className1 = 'is-valid',
    className2 = 'is-invalid';

  useEffect(() => {
    document.getElementById(qtyId) &&
      toggleClassName(qtyId, className1, className2, conditional);
  }, [quantity]);

  return (
    <div>
      <form>
        <input
          name='Quantity'
          id={qtyId}
          type='number'
          min='1'
          max={Math.floor(stock * 0.8)}
          className='form-control text-center'
          maxLength='4'
          value={quantity}
          style={{ maxWidth: '70%' }}
          onChange={e => handleChange(e.target.value)}
        />
        <div className='invalid-feedback'>
          We have {Math.floor(stock * 0.8)} in stock. Please adjust quantity.
        </div>
      </form>
    </div>
  );
};

export default Quantity;
