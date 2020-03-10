import React from 'react';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

const UserOrders = props => {
  const order = props.order;

  const handleClick = () => {
    console.log();
    window.fetch('http://localhost:8080/testForm');
  };

  return (
    <Fade>
      <a href="#">
        <div className="circle-tile-heading dark-blue">
          <i className="fa fa-users fa-fw fa-3x"></i>
        </div>
      </a>
      <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{`Order Status: ${order.status}`}</h5>
              <p className="card-text">{`Order ID: ${order.id}`}</p>
              <p className="card-text">
                <small className="text-muted">{`total: $${order.total}`}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{`# of Items in Order: ${order.products.length}`}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{`Last Updated: ${order.updatedAt}`}</small>
              </p>
            </div>
            <Link to={`/orders/${order.id}`}>
              <button type="button">View Products</button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default UserOrders;
