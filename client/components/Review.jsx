import React, { useEffect } from 'react';

const Review = props => {
  const reviews = props.product.reviews;

  if (reviews) {
    let count = 0;
    for (let i = 0; i < reviews.length; i++) {
      let element = reviews[i];
      let score = element.rating;
      count += score;
    }

    console.log('reviews for product', reviews);
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {reviews.length
              ? `OverAll Rating: ${count / reviews.length} `
              : 'No Reviews'}
          </h5>
          <div>
            <p>description</p>
          </div>

          <a href="#" className="btn btn-primary">
            Leave A Review
          </a>
        </div>
      </div>
    );
  } else {
    console.log(reviews);
    return <h4> Loading</h4>;
  }
};

export default Review;
