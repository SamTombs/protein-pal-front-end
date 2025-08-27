import { useEffect, useState } from "react";
import { fetchItems } from "../services/itemService";

const ItemList = () => {
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     const showItems = async () => {
  //       try {
  //         const itemData = await fetchItems();
  //         setItems(itemData);
  //       } catch (error) {
  //         console.error("Error fetching items:", error);
  //       }
  //     };

  //     showItems();
  //   }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          Name : {item.name}
          <br />
          Brand : {item.brand}
          <br />
          Protein/100g : {item.protein}
        </li>
      ))}
      <button>Will run off a function of add to cart </button>
    </ul>
  );
};

export default ItemList;
