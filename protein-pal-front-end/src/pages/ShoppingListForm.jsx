import { useState } from "react";
import { useNavigate } from "react-router";


const initialState = {
  name: "",
};

const ShoppingListForm = ({ handleAddList }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    handleAddList(formData);
    navigate("/lists");
  };
  return (
    <div style={{ backgroundColor: "#f5f2eb" }}>
      <form
        onSubmit={handleAddSubmit}
        className="bg-white shadow-md rounded px-30 pt-6 pb-5 mb-2"
      >
        <div className="md:flex md:items-center mb-1">
          <label
            htmlFor="name"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >
            Name: 
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-blue-100 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 ml-5 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShoppingListForm;
