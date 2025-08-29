import { useNavigate, Link, useParams } from "react-router";

const Lists = ({ lists, handleDeleteList }) => {
  const navigate = useNavigate();
  const { listId } = useParams()

  const navToPage = (url) => {
    navigate(url);
  };

  return (
    <main className="bg-[#f5f2eb] min-h-screen p-6">
      <div className="space-y-4">
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
          onClick={() => navToPage("/lists/new")}
        >
          +
        </button>
      </div>
    </main>
  );
};

export default Lists;
