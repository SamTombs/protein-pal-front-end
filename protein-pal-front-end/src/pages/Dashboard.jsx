import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import * as userService from "../services/userService";
import logo from "../assets/proteinpal.png";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setUsers(fetchedUsers);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) fetchUsers();
  }, [user]);

  return (
    <main className=" flex flex-row h-130 items-center justify-center bg-neutral-200">
      <section>
        <div>
          <img className="h-20" src={logo} alt="Main Logo" />
        </div>
        <p className="font-inter">SHOPPING FOR PROTEIN MADE SIMPLE</p>
      </section>
    </main>
  );
};

export default Dashboard;
