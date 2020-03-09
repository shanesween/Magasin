import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser, editedUser } from "../store/singleUser";

const AdminSingleUser = props => {
  const singleUser = useSelector(state => state.singleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser(props.match.params.userId));
  }, []);

  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    if (e) {
      dispatch(editedUser(singleUser.id, inputs));
      dispatch(fetchSingleUser(props.match.params.userId));
    }
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(input => ({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <h4>Edit User</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder={singleUser.email}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="isAdmin" name="isAdmin">
              Admin Status
            </label>
            <select
              className="custom-select mr-sm-2"
              onChange={handleInputChange}
              name="isAdmin"
              defaultValue={singleUser.isAdmin}
            >
              <option>Choose...</option>
              <option value="True">Admin</option>
              <option value="False">Not Admin</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Changes
        </button>
        <a className="btn btn-secondary" href="/admin" role="button">
          Back
        </a>
      </form>
    </>
  );
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
