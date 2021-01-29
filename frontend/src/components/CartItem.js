import { Link } from "react-router-dom";
import { Text, TextInput, View } from "react";
import React, { useState } from "react";
import "./CartItem.css";
import {QtyCounter} from './QtyCounter'

const CartItem = () => {
  
    const callback = (qty) => {
        console.log('i am Cartitem, i received qty=', qty)
    }

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
      <p className="cartItem__price">$499.99</p>


      <QtyCounter onChangeValue={callback}></QtyCounter>

      <p className="cartItem__deleteBtn__Block">
        <button className="cartItem__deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
      </p>
    </div>
  );
};

export default CartItem;
