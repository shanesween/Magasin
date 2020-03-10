import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProducts } from '../store/products';
import { createReview, fetchProduct } from '../store/singleProduct';
import Product from './product';
import Fade from 'react-reveal/Fade';
import { fetchUser } from '../store/singleUser';

const ReviewForm = props => {
  const product = useSelector(state => state.product);
  const user = useSelector(state => state.singleUser);
  const history = useHistory();

  // console.log("PRODUCT==>", product);
  const dispatch = useDispatch();
  const handleChange = quantity => {
    setQuantity(quantity);
  };

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productId));
  }, []);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const [inputs, setInputs] = useState({ userId: user.id });

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
      alert('Review Submitted');
      history.goBack();
    }
  };
  $('#modalRegisterForm').modal('show');

  const back = () => {
    history.goBack();
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex="0"
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
                onClick={back}
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
                data-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
