import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/lists`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const updateCart = async (listId, data) => {
  try {
    const res = await axios.patch(`${BASE_URL}/${listId}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteList = async (listId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${listId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { index, create, deleteList, updateCart };
