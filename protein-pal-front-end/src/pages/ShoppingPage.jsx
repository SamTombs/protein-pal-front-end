import ItemList from "../components/ItemList";
import ShoppingCart from "../components/ShoppingCart";
import { useState } from "react";

const ShoppingPage = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevState) => [item, ...prevState]);
  };
  const removeFromCart = (cartItem) => {
    setCart((prevStack) => prevStack.filter((_, index) => index !== cartItem));
  };
  return (
    <>
      <div style={{ backgroundColor: "#f5f2eb" }}>
        <ItemList addToCart={addToCart} />
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
};

export default ShoppingPage;
