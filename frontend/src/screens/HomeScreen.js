import "./HomeScreen.css";
import Product from "../components/Product";
import { FakeProduct } from "../components/FakeProduct";
import { globalState } from "../globalState"

const HomeScreen = () => {
  
  console.log(globalState);
  

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <FakeProduct/>
        <FakeProduct/>
        <FakeProduct/>
        <FakeProduct/>
        <FakeProduct/>
        <FakeProduct/>
        <FakeProduct/>
        <FakeProduct/>
      </div>
    </div>
  );
};

export default HomeScreen;
