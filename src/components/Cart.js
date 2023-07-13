import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice";


const Cart = () => {
  const cardItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="text-2xl font-bold">This is card items</h1>
      <button
        onClick={() => {
          handleClearCart();
        }}
        className="border-2 bg-blue-300 m-2 p-2"
      >
        Clear cart
      </button>

      {cardItem.map((item, index) => {
        return (
          <h1 className="m-2 p-2 " key={index}>
            {item.info?.name}
          </h1>
        );
      })}
    </>
  );
};
export default Cart;
