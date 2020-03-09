import React from "react";

const Quantity = ({ quantity, handleChange }) => (
  <div>
    <form onChange={e => handleChange(e.target.value)}>
      <input
        name="Quantity"
        id="quantity"
        type="number"
        min="1"
        max="25"
        className="form-control"
        maxLength="4"
        // onBlur={/* if value !== quantity trigger handleSubmit*/}
        // onChange={e => setQuantity(+e.target.value)}
        value={quantity}
        style={{ width: "4rem" }}
      />
    </form>
  </div>
);

export default Quantity;
