import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import AddToCartButton from './AddToCartButton';
import CheckOut from './CheckOutButton';
import Reviews from './Reviews';
import Quantity from './Quantity';
import { updateProduct } from '../store/cart';
import ProductAddedModal from './ProductAddedModal';

const SingleProduct = props => {
  const [quantity, setQuantity] = useState(1);
  const product = useSelector(state => state.product);
  // console.log("PRODUCT==>", product);
  const dispatch = useDispatch();
  const handleChange = quantity => {
    setQuantity(quantity);
  };

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productId));
  }, []);

  // const reviewArr = product.reviews;
  // console.log(reviewArr);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="flex-fill align-self-center m-2">
            <div className="row text-xs-center text-sm-center text-md-center float-lg-right float-xl-right">
              <div className="col-sm">
                <img
                  src={product.imageUrl}
                  className="img-fluid rounded opacity-95"
                  style={{ maxHeight: '29rem' }}
                />
              </div>
            </div>
          </div>
          {/* item details */}
          <div className="flex-fill align-self-center m-2 text-light">
            <div className="container">
              <div className="row">
                <h2>{product.title}</h2>
              </div>
              <div className="row">
                <h5>{product.origin} </h5>
              </div>
              <div className="row">
                <p>{product.description}</p>
              </div>
              <div className="row pb-2">
                <span className="align-middle">
                  <Quantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                    handleChange={handleChange}
                  />
                </span>
                <span className="align-middle ml-2">
                  <h4>${product.price}</h4>
                </span>
              </div>
              <div className="row">
                <span className="pt-2">
                  <AddToCartButton
                    key={product.id}
                    product={product}
                    stock={product.stock}
                    quantity={quantity}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="flex-fill w-100">
            <Reviews product={product} />
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal fade zindex-modal"
          id="cartModal"
          tabIndex="-1"
          data-backdrop="false"
          data-background="false"
        >
          <ProductAddedModal product={product} />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
