import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";
import { editedUser } from "../store/user";
import { Link } from "react-router-dom";

const AdminOrders = props => {
  const order = props.order;

  return (
    <Fade>
      <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
        <div className="row">
          <div className="col-md">
            <div className="card-body">
              <h3 className="card-title">Order #: {order.id}</h3>
              <h5 className="card-title">Created at: {order.createdAt}</h5>
              <h6 className="card-text">Status: {order.status}</h6>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AdminOrders;
