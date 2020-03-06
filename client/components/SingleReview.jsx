import React, { useEffect } from 'react';

const SingleReview = props => {
  let review = props.review;

  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {`Rating: ${review.rating} stars`}
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">{review.text}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
