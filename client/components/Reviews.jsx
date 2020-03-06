import React, { useEffect } from 'react';
import SingleReview from './SingleReview';

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
      <div class="container">
        <div class="card shadow-sm my-4">
          <div class="row">
            <div class="col-md-4">
              <div class="card-body">
                <h2 class="card-title font-weight-light mb-3">Reviews</h2>
                <span class="mt-4 display-4">1,219</span>

                <div class="clearfix"></div>
                <button
                  type="button"
                  class="btn btn-primary btn-lg mt-3"
                  data-toggle="collapse"
                  data-target="#reviews"
                >
                  Read reviews
                </button>
              </div>
            </div>
            <div class="col col-md-auto p-0 mx-3 mx-lg-0 border-bottom border-right border-light"></div>
            <div class="col-md">
              <ul class="list-unstyled pr-3">
                <li class="p-3">
                  <div class="d-flex p-2">
                    <span class="text-secondary display-4 mr-3">
                      <i class="fa fa-smile"></i>
                    </span>
                    <div class="ml-2">
                      <h3 class="card-title font-weight-light">Positive</h3>
                      <h6 class="font-weight-light">197 Reviews</h6>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="p-3">
                  <div class="d-flex p-2">
                    <span class="text-muted display-4 mr-3">
                      <i class="fa fa-frown"></i>
                    </span>
                    <div class="ml-2">
                      <h3 class="card-title font-weight-light">Negative</h3>
                      <h6 class="font-weight-light">14 Reviews</h6>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated bg-danger w-25"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="p-3">
                  <div class="d-flex p-2">
                    <span class="text-secondary display-4 mr-3">
                      <i class="fa fa-meh"></i>
                    </span>
                    <div class="ml-2">
                      <h3 class="card-title font-weight-light">Neutral</h3>
                      <h6 class="font-weight-light">89 Reviews</h6>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-primary w-50"
                      role="progressbar"
                      aria-valuenow="50"
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
