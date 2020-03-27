// import axios from "axios";

// export const axiosWithAuth = () => {
//   // get the token from localstorage
//   const token = localStorage.getItem("token");
//   // create a new "instance" of axios with the config object built into it
//   return axios.create({
//     baseURL: "https://anytime-fitness-be.herokuapp.com",
//     headers: {
//       authorization: token
//     }
//   });
// };

// import axios from "axios";

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");
//   //return a new instance of axios
//   return axios.create({
//     //Change to new baseURL from server
//     baseURL: "https://anytime-fitness-be.herokuapp.com",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
//   });
// };

import axios from "axios";

export const axiosWithAuth = () => {
  // get the token from localstorage
  const token = window.localStorage.getItem("token");
  // create a new "instance" of axios with the config object built into it
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "https://anytime-fitness-be.herokuapp.com"
  });
};
