import React from "react";
import { removeProduct } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";

const RemoveButton = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    user.iddispatch(fetchCart(user.id));
  }, [user]);

  const onClick = () => {
    console.log("clicked")
  };
  console.log(props);

  return (
    <button
      id="toggleCart"
      type="button"

      onClick={onClick}
    >
      <em>Remove</em>
    </button>
  );
};

export default RemoveButton;
