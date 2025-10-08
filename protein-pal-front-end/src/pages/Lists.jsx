import { useNavigate, Link, useParams } from "react-router";
import ShoppingListForm from "../components/ShoppingListForm";
import { useState } from "react"

const Lists = ({ lists, handleDeleteList, handleAddList }) => {
  const navigate = useNavigate();
  const { listId } = useParams()
   const [isFormOpen, setIsFormOpen] = useState(false);

  const navToPage = (url) => {
    navigate(url);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen)
  }
  console.log(lists)

  return (
    <main className="bg-[#fbfaf7e0] min-h-screen p-6">
      <div className="space-y-4 pt-15">
        {lists.map((list) => (
          <div
            key={list._id}
            className="flex items-center justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <Link
              to={`/lists/${list._id}`}
              className="text-lg font-semibold text-gray-800 hover:text-blue-600"
            >
              {list.name}
            </Link>

            <button
              className="px-3 py-1 rounded-lg bg-red-800 text-white text-sm hover:bg-red-700 transition"
              onClick={() => handleDeleteList(list._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className="flex items-center justify-center w-12 h-12 cursor-pointer rounded-full bg-amber-900 text-white text-2xl hover:bg-amber-700 transition shadow-md"
          onClick={() => handleFormView()}
        >
          {isFormOpen ? "-" : "+"}
        </button>
      </div>
      {isFormOpen ? 
      <ShoppingListForm handleAddList={handleAddList} isFormOpen={isFormOpen} />
      : ""}   
    </main>   
  );
};

export default Lists;
