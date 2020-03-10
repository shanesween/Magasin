import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products';
// import Product from "./product";
import Fade from 'react-reveal/Fade';
import { fetchOrders } from '../store/order';
import { fetchSingleUser } from '../store/singleUser';
import UserOrders from './UserOrders';
import UserSettingsForm from './UserSettingsForm';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.singleUser);
  const orders = useSelector(state => state.orders);
  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  const handleProductsClick = () => {
    dispatch(fetchOrders(orders));
  };

  const handleUsersClick = () => {
    dispatch(fetchSingleUser());
  };
  console.log('user', user);
  console.log('orders', orders);
  if (orders !== undefined && user !== undefined) {
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
                  My Settings
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
              <h1>{`Welcome, ${user.email}`}</h1>
            </div>
            <div
              className="tab-pane fade show"
              id="users"
              role="tabpanel"
              aria-labelledby="user-tab"
            >
              <div className="card">
                <ul className="list-group list-group-flush">
                  <UserSettingsForm />
                </ul>
              </div>
            </div>

            <div
              className="tab-pane fade show"
              id="products"
              role="tabpanel"
              aria-labelledby="product-tab"
            >
              {/* <div className="card"> */}
              <ul className="list-group list-group-flush">
                {orders !== undefined
                  ? orders.map(order => (
                      <UserOrders key={order.id} order={order} />
                    ))
                  : 'No Orders'}
              </ul>
              {/* </div> */}
            </div>
          </div>
        </Fade>
      </div>
    );
  } else {
    return <h1> Loading</h1>;
  }
};

export default UserProfile;
