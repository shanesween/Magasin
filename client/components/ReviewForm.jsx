import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products';
import { createReview, fetchProduct } from '../store/singleProduct';
import Product from './product';
import Fade from 'react-reveal/Fade';

const ReviewForm = props => {
  const product = props.product;
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = event => {
    event.persist();
    setInputs(input => ({
      ...input,
      [event.target.name]: event.target.value,
      productId: product.id,
    }));
    console.log('input', inputs);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event) {
      dispatch(createReview(inputs));
      dispatch(fetchProduct(product.id));
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Review!</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                >
                  Comment:
                </label>
                <input
                  type="text"
                  id="text"
                  className="form-control validate"
                  name="text"
                  onChange={handleInputChange}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                >
                  Rating:
                </label>
                <input
                  type="number"
                  id="rating"
                  className="form-control validate"
                  name="rating"
                  onChange={handleInputChange}
                  defaultValue={0}
                  max="5"
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-deep-orange"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-lg mt-3"
          data-toggle="modal"
          data-target="#modalRegisterForm"
        >
          Leave A Review!
        </button>
      </div>
    </>
  );
};

export default ReviewForm;
