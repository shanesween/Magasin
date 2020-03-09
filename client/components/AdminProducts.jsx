import React from "react";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

const AdminProducts = props => {
  const product = props.product;

  // const handleClick = () => {
  //   console.log();
  //   window.fetch("http://localhost:8080/testForm");
  // };

  return (
    <>
      <Fade>
        <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <svg width="200" height="200">
                <image href={product.imageUrl} height="150" width="150" />
              </svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to={`/products/admin/${product.id}`}>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </Link>

                <p className="card-text">
                  <small className="text-muted">{`price: $${product.price}`}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{`Stock: ${product.stock}`}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{`Last Updated: ${product.updatedAt}`}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default AdminProducts;
