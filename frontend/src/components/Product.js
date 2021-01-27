import "./Product.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const [hovered, setHovered] = useState(false);
  const addToOrder = () => {
    console.log("noi chuj no i jest");
    setHovered(true);
  };

  return (
    <div className="product">
      <Link
        to={`/product/${1111}`}
        style={{ textDecoration: "none" }}
        className="product__clickable"
      >
        <div className="product__container">
          <img
            className="productPhoto"
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="product name"
          />

          <div className="product__info">
            <p className="info__name">Product 1</p>
            <p className="info__description">
              Nostrud magna voluptate deserunt deserunt cupidatat do deserunt.
              Id eu amet commodo ad eu quis do commodo quis exercitation ea
              magna.
            </p>
          </div>
        </div>
      </Link>

      <div
        className="info__button"
        onMouseOver={addToOrder}
        onMouseLeave={() => {
          console.log("noi chuj no i jest");
          setHovered(false);
        }}
      >
        <p className="info__price">{hovered ? "+" : "$499.99"}</p>
      </div>
    </div>
  );
};

export default Product;
