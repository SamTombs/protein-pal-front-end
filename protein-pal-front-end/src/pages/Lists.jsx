import { useNavigate, Link } from "react-router";

const Lists = ({ lists }) => {
  const navigate = useNavigate();

  const navToPage = (url) => {
    navigate(url);
  };

  return (
    <main style={{ backgroundColor: "#f5f2eb" }}>
      {lists.map((list) => (
        <Link key={list._id} to={`/lists/${list._id}`}>
          <article>
            <header>
              <h2>{list.name}</h2>
            </header>
          </article>
        </Link>
      ))}
      <button
        className="cursor-pointer"
        onClick={() => navToPage("/lists/new")}
      >
        +
      </button>
    </main>
  );
};

export default Lists;
