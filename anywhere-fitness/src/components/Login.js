import React, { useState } from "react";
import { Link } from 'react-router-dom';

import styled from"styled-components";
import axios from "axios";


const Input = styled.input`
width: 100%;
display:flex;
font-size: 1.2rem;
justify-content:center;


border-box: 1px solid,black;
border-radius: 5px;
cursor: pointer;



  &:hover {
    background-image: none;
    background-color: #4dd0e1;
    
  }

  &:disabled {
    background-image: none;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
`

function App() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    
    event.preventDefault();
   // setUser({ username: "", email: "", password: "" });
   axios.post("http://anytime-fitness-be.herokuapp.com/api/auth/login",user)
    .then(res => {
      console.log("Log in data",res.data);
      localStorage.setItem("token", res.data.token)
    })
    .catch(error => {console.log(error)})
  };
  return (
    <div className="App" style ={{margin:"0 auto"}}> 
      {console.log(user)}
      <h1> Log In</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
           
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <Input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <Input
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
  //handleSubmit: (user) => {
  //console.log("Submitted!",user)
  //   axios.post("http://anytime-fitness-be.herokuapp.com/api/auth/login",user)
  //   .then(res => {
  //     console.log("Log in data",res.data);
  //   })
  //   .catch(error => {console.log(error)})
  // }
  
}

export default App;