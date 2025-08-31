import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import * as userService from "../services/userService";
import dashboardMain from "../assets/dashboardMain.png";
import HomeVideo from "../components/HomeVideo";

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
    <main className="flex flex-col bg-[#f5f2eb] items-center">
      <section className="w-7xl pt-50 pb-95">
        <div>
          <img className="w-7xl" src={dashboardMain} alt="Main Photo" />
          <h6 className="text-center pt-20 italic">See More</h6>
        </div>
      </section>
      <section className="w-7xl flex justify-center items-center p-8 gap-8">
        <div className="flex-1">
          <HomeVideo />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            A NEW HORIZON FOR A PROTEIN FOCUSED DIET
          </h1>
          <p>Protein focused, unrelenting</p>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
