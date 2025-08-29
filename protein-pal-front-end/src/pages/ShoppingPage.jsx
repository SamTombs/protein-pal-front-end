import ItemList from "../components/ItemList";
import ShoppingCart from "../components/ShoppingCart";
import { useState } from "react";


const cartFromLocalStorage = JSON.parse(localStorage.getItem("item") || "[]");

const ShoppingPage = () => {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    setCart((prevState) => [item, ...prevState]);
  };

  const removeFromCart = (cartItem) => {
    setCart((prevStack) => prevStack.filter((_, index) => index !== cartItem));
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div style={{ backgroundColor: "#fdf7efff" }}>
        {!showModal ? (
          <button
            className="px-4 py-2 bg-amber-900 text-white text-xs font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            View Cart ({cart.length})
          </button>
        ) : (
          <div>
            <div>
              <button
                className="px-4 py-2 bg-amber-900 text-white text-xs font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-gray-700"
                onClick={toggle}
              >
                Close Cart ({cart.length})
              </button>
            </div>
            <div>
              <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                toggle={toggle}
              />
            </div>
          </div>
        )}

        <ItemList addToCart={addToCart} showModal={showModal} toggle={toggle} />
      </div>
    </>
  );
};

export default ShoppingPage;
