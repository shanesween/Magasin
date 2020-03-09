import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser, editedUser } from "../store/singleUser";

const AdminEditUser = props => {
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

  console.log(singleUser.reviews);
  const reviews = singleUser.reviews;

  return (
    <div className="card">
      <div className="card-header">{singleUser.email}</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h5 className="card-title">
            {singleUser.isAdmin ? "Admin" : "Not Admin"}
          </h5>
          <div className="form-group col-md-6">
            <label htmlFor="isAdmin" name="isAdmin">
              Update Admin Status
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
          <button type="submit" className="btn btn-primary">
            Submit Changes
          </button>
          <a className="btn btn-secondary" href="/admin" role="button">
            Back
          </a>
        </form>
      </div>
      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#orderCollapse"
          role="button"
          aria-expanded="false"
          aria-controls="orderCollapse"
        >
          Show Orders
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#reviewCollapse"
          aria-expanded="false"
          aria-controls="reviewCollapse"
        >
          Show Reviews
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="orderCollapse">
            <div className="card card-body">
              <ul>Order 1</ul>
              <ul>Order 2</ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="reviewCollapse">
            <div className="card card-body">
              <ul>Review 1</ul>
              <ul>Review 2</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditUser;

// {reviews.map(review => ({
//   review
// }))}

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
