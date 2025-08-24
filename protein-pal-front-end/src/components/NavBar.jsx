import { useContext } from "react";
import { Link } from "react-router";
import IconLink from "./IconLink";

import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav
      className="flex justify-between items-center px-4"
      style={{ height: "60px" }}
    >
      <Link to="/" className="h-full">
        <IconLink />
      </Link>
      {user ? (
        <ul className="flex flex-row gap-6">
          <li>Welcome, {user.username}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/lists">Shopping Lists</Link>
          </li>
          <li>
            <Link to="/hoots/new">New List</Link>
          </li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
