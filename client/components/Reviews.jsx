import React, { useEffect } from 'react';
import SingleReview from './SingleReview';

const Review = props => {
  const reviews = props.product.reviews;

  if (reviews) {
    let count = 0;
    let bad = 0;

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
    let badBar = 0;
    function barStatus() {}

    if (badProgress < 50 && badProgress > 0) {
      badBar += 25;
    } else if (badProgress >= 50 && badProgress < 75) {
      badBar += 50;
    } else if (badProgress >= 75 && badProgress < 100) {
      badBar += 75;
    } else if (badProgress === 100) {
      badBar += 100;
    }

    let goodProgress = good / reviews.length;
    let goodBar = 0;
    if (goodProgress < 50 && goodProgress > 0) {
      badBar += 25;
    } else if (goodProgress >= 50 && goodProgress < 75) {
      badBar += 50;
    } else if (goodProgress >= 75 && goodProgress < 100) {
      badBar += 75;
    } else if (badProgress === 100) {
      badBar += 100;
    }

    console.log('reviews for product', reviews);
    return (
      // <div className="card">
      //   <div className="card-body">
      //     <h5 className="card-title">
      //       {reviews.length
      //         ? `OverAll Rating: ${count / reviews.length} `
      //         : 'No Reviews'}
      //     </h5>
      //     <div id="stars-existing" className="starrr" data-rating="4"></div>
      //     <div>
      //       {reviews.map(review => (
      //         <SingleReview review={review} key={review.id} />
      //       ))}
      //     </div>
      //   </div>
      // </div>
      <div className="container">
        <div className="card shadow-sm my-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title font-weight-light mb-3">Reviews</h2>
                <span className="mt-4 display-4">{reviews.length}</span>

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
            <div className="col col-md-auto p-0 mx-3 mx-lg-0 border-bottom border-right border-light"></div>
            <div className="col-md">
              <ul className="list-unstyled pr-3">
                <li className="p-3">
                  <div className="d-flex p-2">
                    <span className="text-secondary display-4 mr-3">
                      <i className="fa fa-smile"></i>
                    </span>
                    <div className="ml-2">
                      <h3 className="card-title font-weight-light">Positive</h3>
                      <h6 className="font-weight-light">{good}</h6>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success w-75"
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
                      <h3 className="card-title font-weight-light">Negative</h3>
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
            <div class="col-12">
              <div class="p-3 collapse" id="reviews">
                <div class="review">
                  <h6>
                    Mike, <em>Boston</em> 5
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                  </h6>
                  <p>
                    I really like how this fits and looks. I have purchased
                    other similar products, but this is the best!
                  </p>
                </div>
                <div class="review">
                  <h6>
                    James, <em>Portsmouth</em> 5
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                  </h6>
                  <p>
                    After buying another cheap knock-off that broke, I realized
                    I should have purchased this one first. I would recommend.
                  </p>
                </div>
                <div class="review">
                  <h6>
                    Judy, <em>Turntown</em> 4.5
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star-half text-warning"></i>
                  </h6>
                  <p>
                    Overall I was please with my purchase. I would have given it
                    a 5, but found the color to be inaccurate.
                  </p>
                </div>
                <div class="review">
                  <h6>
                    Mark, <em>Smithtown</em>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                  </h6>
                  <p>
                    Unfortunately this did not work, and wasn't what I expected
                    in terms of quality and fit. I would not buy this again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(reviews);
    return <h4> Loading</h4>;
  }
};

export default Review;
