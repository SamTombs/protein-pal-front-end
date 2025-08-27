import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import * as userService from "../services/userService";
import logo from "../assets/proteinpal.png";
import dashboardMain from "../assets/dashboardMain.png";

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
    <main
      className="flex flex-row h-150 items-center justify-center"
      style={{ backgroundColor: "#f5f2eb" }}
    >
      <section>
        <div>
          <img className="h-110 w-190" src={dashboardMain} alt="Main Photo" />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
