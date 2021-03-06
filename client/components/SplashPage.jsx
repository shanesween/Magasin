import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/productFilter";
import Product from "./product";

const SplashPage = (props) => {
  let history = props.history;
  const dispatch = useDispatch();
  return (
    <div
      className="fx-container text-light opacity-95"
      style={{ fontFamily: "magasinBrand" }}
      onClick={(event) => {
        dispatch(setFilter(event.target.getAttribute("value")));
        history.push("/products");
      }}
    >
      <Fade bottom cascade>
        <div
          className="box rounded border-dark shadow-lg opacity-95"
          value="objet"
        >
          <img
            // src='https://source.unsplash.com/1000x802/?object'
            src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000"
            value="objet"
          />
          <span>objets</span>
        </div>

        <div
          className="box rounded border-dark shadow-lg opacity-95"
          value="sujet"
        >
          <img
            // src='https://source.unsplash.com/1000x802/?object'
            src="https://images.unsplash.com/photo-1488109811119-98431feb6929?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=802&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000"
            value="sujet"
          />
          <span>sujets</span>
        </div>

        <div
          className="box rounded border-dark shadow-lg opacity-95"
          value="all"
        >
          <img
            src="https://images.unsplash.com/photo-1500630417200-63156e226754?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=804&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000"
            // src='https://source.unsplash.com/1000x804/?object'
            value="all"
          />
          <span>all</span>
        </div>
      </Fade>
    </div>
  );
};

export default SplashPage;

{
  /* <div className='container-fluid mt-4'>
      <div className='d-flex flex-wrap justify-content-center'>
        <div className='flex-fill align-self-center m-2'>
          <div
            className='row'
            onClick={event => {
              dispatch(setFilter(event.target.getAttribute('value')));
              history.push('/products');
            }}
          >
            <div className='col-sm text-center text-light' value='objet'>
              <img
                src='https://eu.louisvuitton.com/images/is/image/lv/1/VE_FB_VISUAL9_L/louis-vuitton--Objets_Nomades_%207_VISUAL9.jpg'
                className='img-fluid rounded opacity-95'
                style={{ maxHeight: '29rem' }}
                value='objet'
              />
            </div>
            <div className='col-sm text-center text-light' value='sujet'>
              <img
                src='https://cdn.rickowens.eu/products/6067/large/CANDLE_PILLAR_1.jpg'
                className='img-fluid rounded opacity-95'
                style={{ maxHeight: '29rem' }}
                value='sujet'
              />
            </div>
          </div>
          <div
            className='row'
            onClick={event => {
              dispatch(setFilter(event.target.getAttribute('value')));
              history.push('/products');
            }}
          >
            <div className='col-sm text-center text-light' value='all'>
              <img
                src='https://cdn.rickowens.eu/custom_page_images/284/original_4.jpg'
                className='img-fluid rounded opacity-95'
                style={{ maxHeight: '29rem' }}
                value='all'
              />
            </div>
          </div>
        </div>
      </div>
    </div> */
}
