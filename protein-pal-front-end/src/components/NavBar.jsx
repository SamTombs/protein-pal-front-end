import { useContext } from "react";
import { Link } from "react-router";
import proteinpal from "../assets/proteinpal.png";

import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav
      className="flex justify-between bg-white text-black items-center px-4"
      style={{ height: "60px", backgroundColor: "#f5f2eb" }}
    >
      <Link to="/" className="h-6 w-50">
        <img src={proteinpal} alt="logo" className="h-full cursor-pointer" />
      </Link>
      {user ? (
        <ul className="flex flex-row gap-6">
          <li className="text-white bg-gradient-to-r bg-amber-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white bg-gradient-to-r bg-amber-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/lists">Lists</Link>
          </li>
          <li className="text-white bg-gradient-to-r bg-amber-900 hover:bg-gradient-to-br focus:ring-8 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex flex-row gap-6">
          <li className="text-white bg-gradient-to-r bg-amber-900 hover:bg-gradient-to-br focus:ring-8 focus:outline-none focus:ring-black rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li className="text-white bg-gradient-to-r bg-amber-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-black rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
