import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import * as userService from '../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setUsers(fetchedUsers);
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUsers();
  }, [user]);

  return (
    <main className=" flex flex-row h-screen w-screen bg-white dark:bg-gray-200">
      <h1>ProteinPal</h1>
 
    </main>
  );
};

export default Dashboard;