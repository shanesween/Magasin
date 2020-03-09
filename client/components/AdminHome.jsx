import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
// import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";
import AdminUsers from "./AdminUsers";
import AdminProducts from "./AdminProducts";

const AdminHome = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);

  const handleProductsClick = () => {
    dispatch(fetchProducts(products));
  };

  const handleUsersClick = () => {
    dispatch(fetchUsers(users));
  };

  let first25 = users.slice(0, 25);
  let products25 = products.slice(0, 25);

  return (
    <div>
      <Fade>
        <div className="justify-content-center m-2">
          <ul className="nav nav-tabs" id="list-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                id="user-tab"
                data-toggle="tab"
                href="#users"
                role="tab"
                aria-controls="users"
                aria-selected="true"
                onClick={handleUsersClick}
              >
                Users
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                id="product-tab"
                data-toggle="tab"
                href="#products"
                role="tab"
                aria-controls="products"
                aria-selected="true"
                onClick={handleProductsClick}
              >
                Products
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="tab-content">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h1>ADMIN HOMEPAGE</h1>
          </div>
          <div
            className="tab-pane fade show"
            id="users"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div className="card">
              <ul className="list-group list-group-flush">
                {first25.map(user => (
                  <AdminUsers key={user.id} user={user} />
                ))}
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="products"
            role="tabpanel"
            aria-labelledby="product-tab"
          >
            <div className="card">
              <ul className="list-group list-group-flush">
                {products25.map(product => (
                  <AdminProducts key={product.id} product={product} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AdminHome;
