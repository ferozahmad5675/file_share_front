import axios from "axios";

export const uploadFile = async (date) => {
  try {
    let res = await axios.post("http://localhost:8000/upload", date);
    return res.data;
  } catch (error) {
    console.error("error while Creating Api", error.message);
  }
};
