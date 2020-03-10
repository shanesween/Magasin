import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/productFilter";
import Product from "./product";

const SplashPage = props => {
  let history = props.history;
  const dispatch = useDispatch();
  return (
    <div className="container-fluid mt-4">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="flex-fill align-self-center m-2">
          <div
            className="row"
            onClick={event => {
              dispatch(setFilter(event.target.getAttribute("value")));
              history.push("/products");
            }}
          >
            <div className="col-sm text-center text-light" value="all">
              <img
                src="https://www.menuworks.com/images/sliders/buildingbettermenus/everything.png"
                className="img-fluid rounded opacity-95"
                style={{ maxHeight: "29rem" }}
                value="all"
              />
            </div>
            <div className="col-sm text-center text-light" value="tea">
              <img
                src="https://cdn-us-ec.yottaa.net/560442ae312e58642f000cde/44b6e820c4840134a0f50a3ba3fac80a.yottaa.net/v~4b.154/tenantlogos/27759.png?yocs=C_F_"
                className="img-fluid rounded opacity-95"
                style={{ maxHeight: "29rem" }}
                value="tea"
              />
            </div>
          </div>
          <div
            className="row"
            onClick={event => {
              dispatch(setFilter(event.target.getAttribute("value")));
              history.push("/products");
            }}
          >
            <div className="col-sm text-center text-light" value="coffee">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Knick_Knack_title.png"
                className="img-fluid rounded opacity-95"
                style={{ maxHeight: "29rem" }}
                value="coffee"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
