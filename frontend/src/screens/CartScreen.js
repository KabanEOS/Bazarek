import "./CartScreen.css";
import CartItem from "../components/CartItem";
const CartScreen = () => {
  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="cartScreen__right_floatingTile">
        <div className="cartScreen__info">
            <p>Subtotal (0) items</p>
            <p className="totalPrice">$499.99</p>
        </div>
        <div>
            <button className="checkoutBtn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
