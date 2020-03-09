import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
// import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";
import AdminUsers from "./AdminUsers";
import { fetchProduct } from "../store/singleProduct";

const AdminHome = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);

  const handleProductsClick = () => {
    dispatch(fetchProduct(products));
  };

  const handleUsersClick = () => {
    dispatch(fetchUsers(users));
  };

  let first25 = users.slice(0, 25);

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
                id="home-tab"
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
                id="home-tab"
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
            <h1>ADMIN HOMEPAGE DOGG</h1>
          </div>
          <div
            className="tab-pane fade show"
            id="users"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div className="card">
              <ul className="list-group list-group-flush">
                {first25.map(user => {
                  return <AdminUsers key={user.id} user={user} />;
                })}
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade show "
            id="products"
            role="tabpanel"
            aria-labelledby="products-tab"
          >
            <h1>THIS A PRODUCTPAGE DOGG</h1>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AdminHome;

// {first25.map(product => {
//   return <ProductAdmin key={product.id} product={product} />;
// })}
