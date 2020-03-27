import React, { useState } from "react";
import { Link } from "react-router-dom";
//import styled from"styled-component";
import axios from "axios";
// const Input = styled.input`
// width: 100%;
// margin: 45px;
// padding:20px;
// `
const Login = props => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    // setUser({ username: "", email: "", password: "" });
    axios
      .post("https://anytime-fitness-be.herokuapp.com/api/auth/login", user)
      .then(res => {
        console.log("Log in data", res.data);
        localStorage.setItem("token", res.data.token);
        props.history.push("/protected");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      {console.log(user)}
      <h1> Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
  //   handleSubmit: (user) => {
  //   console.log("Submitted!",user)
  //   axios.post("http://anytime-fitness-be.herokuapp.com/api/auth/login",user)
  //   .then(res => {
  //     console.log("Log in data",res.data);
  //   })
  //   .catch(error => {console.log(error)})
  // }
};
export default Login;
