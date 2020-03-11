import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "../store/products";
import Product from "./product";
import Fade from "react-reveal/Fade";
import ProductAddedModal from "./ProductAddedModal";
import Pagination from "./Pagination";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const productFilter = useSelector(state => state.productFilter);

  const page = 1;
  const limit = 25;

  useEffect(() => {
    dispatch(filterProducts(productFilter, page, limit));
  }, []);
  // let first10 = products.slice(0, 10);

  return (
    <>
      <div className="justify-content-center m-2">
        <div className="d-flex">
          <Fade>
            <div style={{ display: "inline-block" }}>
              <div className="row m-2">
                {products.map(product => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </Fade>
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
          {products.map(product => {
            return <ProductAddedModal key={product.id} product={product} />;
          })}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default AllProducts;
