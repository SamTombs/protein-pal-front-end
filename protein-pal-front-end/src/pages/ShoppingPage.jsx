import ItemList from "../components/ItemList";
import ShoppingCart from "../components/ShoppingCart";
import { useState } from "react";
import { useParams } from "react-router";

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("item") || "[]");

const ShoppingPage = ({ handleUpdateCart, lists }) => {
  console.log(lists)
  const { listId } = useParams();
  // const filteredLists = lists? lists?.filter((list) => listId !== list._id ) : [] ;
  const [cart, setCart] = useState(lists?.filter((list) => listId !== list._id ));
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    console.log(item);

    handleUpdateCart(listId, item);
  };

  const removeFromCart = (cartItem) => {
    setCart((prevStack) => prevStack.filter((_, index) => index !== cartItem));
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-[#fdf7efff]">
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
