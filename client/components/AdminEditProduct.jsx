import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct, editedProduct } from '../store/singleProduct';
import axios from 'axios';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const AdminEditProduct = props => {
  const product = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productId));
  }, []);

  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    if (event) {
      dispatch(editedProduct(product.id, inputs));

      dispatch(fetchProduct(props.match.params.productId));
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(input => ({
      ...input,
      [event.target.name]: event.target.value,
    }));
  };

  // const handleSubmit = () => {
  //   dispatch();
  // };
  return (
    <>
      <h4>Edit Form</h4>
      <form onSubmit={handleSubmit}>
        <img
          src={product.imageUrl}
          className="rounded float-left"
          width="150px"
          height="200px"
        />
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder={product.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder={product.imageUrl}
              onChange={handleInputChange}
              name="imageUrl"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            placeholder={product.stock}
            defaultValue={product.stock}
            onChange={handleInputChange}
            name="stock"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" name="category">
            Category
          </label>
          <select
            className="custom-select mr-sm-2"
            onChange={handleInputChange}
            name="category"
            defaultValue={product.category}
          >
            <option>Choose...</option>
            <option value="tea">Tea</option>
            <option value="coffee">Coffee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input
            type="text"
            className="form-control"
            id="origin"
            placeholder={product.origin}
            onChange={handleInputChange}
            name="origin"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder={product.description}
              onChange={handleInputChange}
              name="description"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Changes
        </button>
        <span> </span>
        <a className="btn btn-secondary" href="/test" role="button">
          Back
        </a>
      </form>
    </>
  );
};

export default AdminEditProduct;
