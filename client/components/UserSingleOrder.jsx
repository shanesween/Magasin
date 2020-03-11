import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderItem } from '../store/orderItem';
import SingleItem from './SingleOrder';

const UserSingleOrder = props => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log();
    window.fetch('http://localhost:8080/testForm');
  };
  useEffect(() => {
    dispatch(fetchOrderItem(props.match.params.orderId));
  }, []);

  const orderItem = useSelector(state => state.orderItem);

  console.log(orderItem);

  if (orderItem) {
    return (
      <Fade>
        <div>
          {orderItem.map(item => (
            <SingleItem item={item} key={item.id} />
          ))}
        </div>
      </Fade>
    );
  }
};

export default UserSingleOrder;
