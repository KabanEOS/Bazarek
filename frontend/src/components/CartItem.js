import { Link } from "react-router-dom";
import {  Text, TextInput, View  } from "react";
import React, { useState } from "react";
import "./CartItem.css";

const CartItem = () => {


  let qty = 1;

  const incAmount = () => {
    qty += 1;
  };

  const decAmount = () => {
    qty -= 1;
  };

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

      <p className="cartItem__qty__Block">
        <div className="cartItem__qty">
          <form>
            <label>
              Qty
                <input> 
                </input>
              
              {/* TODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO */}
            </label>
          </form>
        </div>
      </p>
      <p className="incDec__bts__Block">
        <div className="incDec__bts">
          <button className="qtyInc" onClick={incAmount}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="qtyDec" onClick={decAmount}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </p>
      <p className="cartItem__deleteBtn__Block">
        <button className="cartItem__deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
      </p>
    </div>
  );
};

export default CartItem;
