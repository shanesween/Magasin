import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, editedProduct } from "../store/singleProduct";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { addNewProduct } from "../store/products";

const AdminAddProduct = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    if (e) {
      dispatch(addNewProduct(inputs));
    }
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(input => ({
      ...input,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered" role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addProductModal">
              Add Product
            </h5>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
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
        </div>
      </div>
    </>
  );
};

export default AdminAddProduct;
