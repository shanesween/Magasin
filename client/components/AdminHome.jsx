import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "../store/products";
// import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";
import { fetchOrders } from "../store/orders";

import AdminUsers from "./AdminUsers";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminAddProduct from "./AdminAddProduct";
import Pagination from "./Pagination";

const AdminHome = () => {
  // const [limit, setLimit] = useState(25);
  // const page = window.location.href.split()
  // const page = queryString.parse(location.search);

  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);

  const page = 1;
  const limit = 25;

  const handleProductsClick = () => {
    dispatch(filterProducts(products, page, limit));
  };

  const handleUsersClick = () => {
    dispatch(fetchUsers());
  };

  const handleOrdersClick = () => {
    dispatch(fetchOrders());
  };

  let users25 = users.slice(0, 25);
  let products25 = products.slice(0, 25);
  let orders25 = orders.slice(0, 25);

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
            <li className="nav-item">
              <a
                className="nav-link"
                id="order-tab"
                data-toggle="tab"
                href="#orders"
                role="tab"
                aria-controls="orders"
                aria-selected="true"
                onClick={handleOrdersClick}
              >
                Orders
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
            <h1 className="text-light">Covfefe Admin Portal</h1>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#addProductModal"
            >
              Add New Product
            </button>
            <div>
              <div
                className="modal fade zindex-modal"
                id="addProductModal"
                tabIndex="-1"
                data-backdrop="false"
                data-background="false"
              >
                <AdminAddProduct />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="users"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div className="card" style={{ background: "00000000" }}>
              <ul className="list-group list-group-flush">
                {users25.map(user => (
                  <AdminUsers key={user.id} user={user} />
                ))}
              </ul>
              <Pagination />
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="products"
            role="tabpanel"
            aria-labelledby="product-tab"
          >
            <div className="card" style={{ background: "00000000" }}>
              <ul className="list-group list-group-flush">
                {products25.map(product => (
                  <AdminProducts key={product.id} product={product} />
                ))}
              </ul>
              <Pagination />
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="orders"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div className="card" style={{ background: "00000000" }}>
              <ul className="list-group list-group-flush">
                {orders25.map(order => (
                  <AdminOrders key={order.id} order={order} />
                ))}
              </ul>
              <Pagination />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AdminHome;
