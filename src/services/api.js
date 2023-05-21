import axios from "axios";

export const uploadFile = async (date) => {
  try {
    let res = await axios.post(
      "https://file-share-back.onrender.com/upload",
      date
    );
    return res.data;
  } catch (error) {
    console.error("error while Creating Api", error.message);
  }
};
