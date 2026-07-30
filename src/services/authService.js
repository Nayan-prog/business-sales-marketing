import api from "../api/axios";

export const loginUser = async (username, password) => {
  console.log("Sending Login Request");

const response = await api.post("login/", {
    username,
    password,
  });
  console.log(response);
  return response.data;
};