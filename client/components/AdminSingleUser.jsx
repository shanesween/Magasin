import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";

const AdminSingleUser = props => {
  const singleUser = useSelector(state => state.singleUser);
  const dispatch = useDispatch();
  console.log(singleUser);
  console.log(props.match.params.userId);

  useEffect(() => {
    dispatch(fetchSingleUser(props.match.params.userId));
    console.log("singleUser", singleUser);
  }, []);

  return <h1>{singleUser.email}</h1>;
};

export default AdminSingleUser;

// const dispatch = useDispatch();
// const users = useSelector(state => state.user);
// useEffect(() => {
//   dispatch(editedUser());
// }, []);

// const [showEdit, setShowEdit] = useState(false);

// const onEditClick = () => {
//   setShowEdit(!showEdit);
// };

// const editUser = async userProps => {
//   await
// }

// const handleEdit = e => {
//   e.preventDefault();
//   return setShowEdit({
//     showEdit: !showEdit
//   });
// };
