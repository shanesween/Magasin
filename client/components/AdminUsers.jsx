import React, { useEffect, useState } from "react";
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

  const [showEdit, setShowEdit] = useState(false);

  const user = props.user;
  console.log(user);

  const onEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div>
      <li className="list-group-item">
        <Fade>
          <h5>{user.email}</h5>
          <h5>Admin status: {user.isAdmin ? "admin" : "not admin"}</h5>
          <button type="submit" onClick={onEditClick}>
            Edit User
          </button>
        </Fade>
      </li>
    </div>
  );
};

export default AdminUsers;
