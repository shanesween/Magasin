import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/cart";
import CartItem from "./CartItem";
import CheckOut from "./CheckOutButton";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  useEffect(() => {
    dispatch(fetchCart());
  }, [user]);

  // console.log('CART==>', cart);
  // console.log(
  //   cart.products &&
  //     cart.products
  //       .reduce((acc, prod) => acc + +prod.price * prod.orderItem.quantity, 0)
  //       .toFixed(2)
  // );

  const subTotal =
    cart.products &&
    cart.products
      .reduce((acc, prod) => acc + +prod.price * prod.orderItem.quantity, 0)
      .toFixed(2);

  let taxRate = 0.1025;

  const taxAmount = subTotal * taxRate;

  const cartTotal = +subTotal + +taxAmount;

  return cart.products && cart.products.length ? (
    <div className="container-fluid" style={{ width: "100%" }}>
      <Fade cascade>
        <div className="d-flex justify-content-between mt-2 mb-2 ml-4 mr-4">
          <cite>
            <h3 className="mt-3">Shopping Cart</h3>
          </cite>
        </div>
      </Fade>
      <Fade cascade>
        <div className="row">
          <div className="col align-content-center m-2 mr-2">
            {cart.products.map(cartItem => {
              return <CartItem key={cartItem.id} cartItem={cartItem} />;
            })}
          </div>
        </div>
        <div className="container-fluid checkout-pod border-top">
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm"></div>
            <div className="col-sm">
              <div className="summary-totals m-4">
                <div className="border-top border-bottom">
                  <div className="row cartTotals">
                    <div className="col-8 font-weight-bold">Subtotal</div>
                    <div className="col-4 font-weight-bold text-right">
                      ${subTotal}
                    </div>
                    <div className="col-8">Shipping</div>
                    <div className="col-4 text-right">FREE</div>
                    <div className="col-8">Sales Tax</div>
                    <div className="col-4 text-right">
                      ${taxAmount.toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="row total mt-2 mb-2">
                  <div className="col-8">
                    <h3 className="font-weight-bold">Total</h3>
                  </div>
                  <div className="col-4">
                    <h3 className="font-weight-bold text-right">
                      ${cartTotal.toFixed(2)}
                    </h3>
                  </div>
                </div>
                {/* checkout needs to be passed in total and cartId */}
                {cart.products && (
                  <CheckOut cartId={cart} total={cartTotal.toFixed(2)} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4"></div>
      </Fade>
    </div>
  ) : (
    <div className="container-fluid text-center mb-mt-2">
      <Fade>
        <p className="p-3">There are no items in your cart.</p>
      </Fade>
    </div>
  );
};

export default Cart;
