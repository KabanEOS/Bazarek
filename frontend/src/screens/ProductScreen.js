import "./ProductScreen.css";
import { FakeDiv } from "../components/FakeDiv";

const ProductScreen = () => {
  return (
    <div className="page-wrapper">
      <div className="productScreen">
        <div className="primaryContent">
          <div className="left__image">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              alt="product name"
            />
          </div>
        </div>

        <div className="secondaryContent">
          <div className="left__info">
            <p className="left__name">Product 1</p>
            <p>Price: $499.99</p>
            <p>
              Nostrud magna voluptate deserunt deserunt cupidatat do deserunt.
              Id eu amet commodo ad eu quis do commodo quis exercitation ea
              magna.
            </p>
          </div>
          <div className="right__info">
            <p className="price__info">
              <span>Total price: </span>
              <span style={{ fontWeight: "bold" }}>$499.99</span>
            </p>
            <p>
              Status: <span>In Stock</span>
            </p>
            <p>
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </p>
            <p>
              <button type="button">Add to order</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
