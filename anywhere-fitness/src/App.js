import React, { useState } from "react";
import Register from './components/Register'
import Success from './components/Success';
import Login from './components/Login';
import './App.css';


export default function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const formSubmit = () => {
    setFormSuccess(true);
  };
  return (
    <div className="App">
      {formSuccess ? <Success /> : <Register submitHandler={formSubmit} />}
      <Login />
      
    </div>
  );
}

