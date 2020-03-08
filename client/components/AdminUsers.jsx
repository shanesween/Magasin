import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
import Product from "./product";
import Fade from "react-reveal/Fade";
import { fetchUsers } from "../store/users";

const AdminUsers = props => {
  // const dispatch = useDispatch();
  // const users = useSelector(state => state.users);
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  const user = props.user;
  // console.log(user);

  return (
    <div className="justify-content-center m-2">
      <div className="d-inline-block">
        <Fade>
          <div className="align-content-around flex-wrap row m-2">
            <h1>{user.email}</h1>
            <h5>Admin status: {user.isAdmin ? "admin" : "not admin"}</h5>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AdminUsers;
