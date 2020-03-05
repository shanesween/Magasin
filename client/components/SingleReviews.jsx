import React, { useEffect } from 'react';

const SingleReview = props => {
  let review = props.review;

  return <p> {review.text}</p>;
};

export default SingleReview;
