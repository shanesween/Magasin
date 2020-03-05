import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../store/cart';
import CartItem from './CartItem';
import CheckOut from './CheckOutButton';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  console.log(user);
    useEffect(() => {
      dispatch(fetchCart(user.id));
    }, [user]);
  return cart.products ? (
    <div className='justify-content-center m-2'>
      {/* <Fade cascade> */}
      <div className='d-flex justify-content-between mt-2 ml-4 mr-4'>
        <cite>
          <h3 className='mt-3'>Shopping Cart</h3>
        </cite>
      </div>
      {/* </Fade> */}
      <div className='d-inline-block'>
        <div className='align-content-around flex-wrap row m-2'>
          {cart.products.map(cartItem => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>

      </div>
      {cart.products&&<CheckOut />}

    </div>
  ) : (
    <div className='container-fluid text-center mb-mt-2'>
      {/* <Fade> */}
      <p className='p-3'>There are no items in your cart.</p>
      {/* </Fade> */}
    </div>
  );
  // return <div>Henlo</div>;
};

export default Cart;
