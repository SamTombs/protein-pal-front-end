import { useEffect } from "react";

const ShoppingCart = ({ cart, removeFromCart }) => {
  // useEffect(() => {
  //   localStorage.setItem("item", JSON.stringify(cart));
  // }, [cart]);

  return (
    <div className="bg-white">
      <ul className=" flex flex-row flex-wrap gap-4 px-100 mb-20">
        {cart.map((item, index) => (
          <li
            key={index}
            className="w-80 h-96 flex flex-col justify-between border border-gray-200 rounded-lg shadow-sm flex-grow-0 flex-shrink-0"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-5 flex-grow">
              <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
                  {item.name}
                </h5>
              </div>
              <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
                Brand: {item.brand}
              </p>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                Protein/100g: {item.protein}
              </p>
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
