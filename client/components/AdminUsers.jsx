import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";
import { editedUser } from "../store/user";
import { Link } from "react-router-dom";

const AdminUsers = props => {
  const user = props.user;

  return (
    <div>
      <li className="list-group-item">
        <Fade>
          <Link to={`/users/${user.id}`}>
            <h5>{user.email}</h5>
          </Link>
          <h5>Admin status: {user.isAdmin ? "admin" : "not admin"}</h5>
        </Fade>
      </li>
    </div>
  );
};

export default AdminUsers;
