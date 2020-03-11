import React, { useEffect } from 'react';

const SingleReview = props => {
  let review = props.review;

  let count = Math.floor(props.review.rating);
  let stars = '';

  while (count !== 0) {
    stars += '⭐️';
    count--;
  }

  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={`#${review.id}`}
              aria-expanded="true"
              aria-controls={review.id}
            >
              {`Rating: ${stars} `}
            </button>
          </h5>
        </div>

        <div
          id={review.id}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <p>
              <cite title="Source Title">
                {props.review.rating >= 3
                  ? 'Overall: GOOD ✅'
                  : 'Overall: BAD ❌'}
              </cite>
            </p>
            <p>
              {' '}
              <cite title="Source Title">Comment:</cite>
            </p>
            <blockquote className="blockquote text-left">
              <p>{review.text}</p>
              <footer className="blockquote-footer">Anonymous Buyer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
