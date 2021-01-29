import { Link } from "react-router-dom";
import { Text, TextInput, View } from "react";
import React, { useState } from "react";
import "./CartItem.css";
import { QtyCounter } from "./QtyCounter";
import { globalState } from "../globalState"


const CartItem = () => {
  let qtyVal = 0;
  const price = 399.99;
//   globalState.basket[0].price=price;
  
  const callback = (qty) => {
      qtyVal = qty;
      sumPriceSetter(price * qtyVal);
      console.log(globalState);
    //   globalState.basket[0].qty=qty;
  };

  const[sumPrice, sumPriceSetter] = useState(price);

  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="product name"
        />
      </div>

      <Link
        to={`/product/${1111}`}
        style={{ textDecoration: "none" }}
        className="cartItem__name"
      >
        <p>Product 1 nazwa nazwa nazwa nazwa nazwa nazwa nazwa nazwa </p>
      </Link>
      <p className="cartItem__price">{price}</p>

      <QtyCounter onChangeValue={callback}></QtyCounter>

      <p className="cartItem__deleteBtn__Block">
        <button className="cartItem__deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
      </p>

      <p className="cartItem__sum__Block">
        <div className="cartItem__sum">
            {sumPrice}
        </div>
      </p>

    </div>
  );
};

export default CartItem;
