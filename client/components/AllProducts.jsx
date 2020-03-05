import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
import Product from "./product";
import CheckOut from "./CheckOutButton";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  let first10 = products.slice(0, 10);
  return (
    <div>
      {first10.map(product => {
        return <Product key={product.id} product={product} />;
      })}
      {}
    </div>
  );
};

export default AllProducts;
