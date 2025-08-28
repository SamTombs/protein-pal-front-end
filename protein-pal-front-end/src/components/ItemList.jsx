import { useEffect, useState } from "react";
import { fetchItems } from "../services/itemService";

const ItemList = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const showItems = async () => {
      try {
        const itemData = await fetchItems();
        setItems(itemData);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    showItems();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-80 h-96 flex flex-col justify-between bg-stone-200 border border-gray-200 rounded-lg shadow-sm flex-grow-0 flex-shrink-0"
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
              className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={() => addToCart(item)}
            >
              ADD ITEM
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
