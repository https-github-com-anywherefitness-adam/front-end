import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = props => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChanges = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    //axiosWithAuth()
    axios
      .post(
        "https://anytime-fitness-be.herokuapp.com/api/auth/register",
        newUser
      )
      .then(res => {
        console.log("register response.data", res.data);
        //props.history.push("/");

        // localStorage.setItem("token", res.data.payload);
        // setNewUser(res.data);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  return (
    <div>
      {console.log(newUser)}
      <h1>Add New User</h1>
      <form onSubmit={onSubmit}>
        <p>
          <input
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChanges}
          />
        </p>
        <p>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChanges}
          />
        </p>
        <p>
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChanges}
          />
        </p>
        <button type="submit">Create New User</button>
      </form>
    </div>
  );
};

export default Register;
