import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import AppLayout from "./layout/AppLayout";
import Lists from "./pages/Lists";
import About from "./pages/About";
import ShoppingPage from "./pages/ShoppingPage";
import * as listService from "./services/listService";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { user } = useContext(UserContext);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const fetchedLists = await listService.index();
        setLists(fetchedLists.data);
        console.log(fetchedLists);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) fetchLists();
  }, [user]);

  const handleAddList = async (formData) => {
    try {
      const newList = await listService.create(formData);
      console.log(formData);
      console.log("New List:", newList);
      console.log(lists);
      setLists([...lists, newList]);
    } catch (error) {
      console.error("FAILED TO ADD LIST", error);
    }
  };

  const handleDeleteList = async (listId) => {
    try {
      await listService.deleteList(listId);
      setLists(lists.filter((list) => list._id !== listId));
    } catch (error) {
      console.error("FAILED TO DELETE LIST", error);
    }
  };

 const handleUpdateCart = async (listId, data) => {
    console.log(listId)
    console.log(data)
    try {
      const updatedCart = await listService.updateCart(listId, data)
      setLists(lists.map((list) => (list._id === updatedCart._id ? updatedCart : list))
      );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/lists"
            element={
              <Lists lists={lists} handleDeleteList={handleDeleteList} handleAddList={handleAddList}  />
            }
          />
          <Route path="/lists/:listId" element={<ShoppingPage lists={lists} handleUpdateCart={handleUpdateCart} />} />
          <>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </>
        </Route>
      </Routes>
    </>
  );
};

export default App;
