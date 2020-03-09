import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, editedProduct } from "../store/singleProduct";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

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
      [event.target.name]: event.target.value
    }));
  };

  // const handleSubmit = () => {
  //   dispatch();
  // };
  return (
    <>
      <div className="card">
        <h4>Edit {product.title}</h4>
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
                id="title"
                defaultValue={product.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="imageUrl">Image Url</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                defaultValue={product.imageUrl}
                onChange={handleInputChange}
                name="imageUrl"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              defaultValue={product.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
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
              defaultValue={product.category}
              onChange={handleInputChange}
              name="category"
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
              defaultValue={product.origin}
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
                defaultValue={product.description}
                onChange={handleInputChange}
                name="description"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Changes
          </button>
          <span> </span>
          <a className="btn btn-secondary" href="/admin" role="button">
            Back
          </a>
        </form>
      </div>
    </>
  );
};

export default AdminEditProduct;
