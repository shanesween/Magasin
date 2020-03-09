import React, { useEffect } from "react";
import SingleReview from "./SingleReview";
import ReviewsForm from "./ReviewForm";

const Review = props => {
  const reviews = props.product.reviews;

  const barStatus = (progress, bar) => {
    if (progress < 50 && progress > 0) {
      bar = 25;
    } else if (progress >= 50 && progress < 75) {
      bar = 50;
    } else if (progress >= 75 && progress < 100) {
      bar = 75;
    } else if (progress >= 100) {
      bar = 100;
    }
    return bar;
  };
  if (reviews && reviews.length !== 0) {
    let count = 0;
    let bad = 0;
    console.log("reviews", reviews.length);

    let good = 0;
    // count the number of bad reviews and good reviews
    for (let i = 0; i < reviews.length; i++) {
      let element = reviews[i];
      let score = element.rating;
      count += score;
      if (element.rating <= 2) {
        bad++;
      } else {
        good++;
      }
    }

    let badProgress = (bad / reviews.length) * 100;

    let goodProgress = (good / reviews.length) * 100;

    let negativeBar = 0;
    let positiveBar = 0;

    let badBar = barStatus(badProgress, negativeBar);
    let goodBar = barStatus(goodProgress, positiveBar);

    let averageRating = Math.floor(count / reviews.length);
    // eslint-disable-next-line no-unused-vars
    let stars = "";
    while (averageRating !== 0) {
      stars += "⭐️";
      averageRating--;
    }

    return (
      <div className="container">
        <div className="card shadow-sm my-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title font-weight-light mb-3">Reviews</h2>
                <span className="mt-4 display-4">{reviews.length}</span>
                <h2 className="card-title font-weight-light mb-3">
                  Overall Rating:
                </h2>
                <span className="mt-4 display-5">{stars}</span>

                <div className="clearfix"></div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg mt-3"
                  data-toggle="collapse"
                  data-target="#reviews"
                >
                  Read reviews
                </button>
              </div>
            </div>
            <div className="col col-md-auto p-0 mx-3 mx-lg-0 border-bottom border-right border-light  "></div>
            <div className="col-md">
              <ul className="list-unstyled pr-3">
                <li className="p-3">
                  <div className="d-flex p-2">
                    <span className="text-secondary display-4 mr-3">
                      <i className="fa fa-smile"></i>
                    </span>
                    <div className="ml-2">
                      <h3 className="card-title font-weight-light">
                        Positive 😃👍✅
                      </h3>
                      <h6 className="font-weight-light">{good}</h6>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar progress-bar-striped progress-bar-animated bg-success   w-${goodBar}`}
                      role="progressbar"
                      aria-valuenow={(good / reviews.length) * 100}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="p-3">
                  <div className="d-flex p-2">
                    <span className="text-muted display-4 mr-3">
                      <i className="fa fa-frown"></i>
                    </span>
                    <div className="ml-2">
                      <h3 className="card-title font-weight-light">
                        Negative 🙁👎❌
                      </h3>
                      <h6 className="font-weight-light">{bad}</h6>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar progress-bar-striped progress-bar-animated bg-danger w-${badBar}`}
                      role="progressbar"
                      aria-valuenow={
                        reviews.length > 0 ? (bad / reviews.length) * 100 : 0
                      }
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div className="p-3 collapse" id="reviews">
                {reviews.map((review, idx) => (
                  <SingleReview review={review} key={idx} />
                ))}
                <ReviewsForm product={props.product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (reviews === undefined) {
    console.log(reviews);
    return <h4> Loading</h4>;
  } else {
    return (
      <div className="container">
        <h1> Be the First to Leave a Review!</h1>
        <ReviewsForm product={props.product} />;
      </div>
    );
  }
};

export default Review;
