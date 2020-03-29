import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Button = styled.div`
  width: 15%;
  margin: 0 auto;
  border-radius: 1.5rem;
  background-color: #ffc357;
  box-shadow: 2px 2px #d88144;
  color: #084f93;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CreateClass = props => {
  const [newClass, setNewClass] = useState({
    name: "",
    type: "",
    start_time: "",
    duration: "",
    intensity: "",
    location: "",
    registered: 0,
    max_size: 0
  });

  const handleChanges = e => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(newClass);
    axios
      .post("https://anytime-fitness-be.herokuapp.com/api/class", newClass)
      .then(res => {
        console.log("class data", res);
        setNewClass(res.data);
        window.location.href = "/";
      })
      //  .then(history.push("/"))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h2>Create New Class</h2>
      <form>
        <p>
          <input
            placeholder="Name"
            name="name"
            onChange={handleChanges}
            id="name"
          />
        </p>
        <p>
          <input
            placeholder="Class Type"
            name="type"
            onChange={handleChanges}
            id="type"
          />
        </p>
        <p>
          <input
            placeholder="Start Time"
            name="start_time"
            onChange={handleChanges}
            id="start_time"
          />
        </p>
        <p>
          <input
            placeholder="Duration"
            name="duration"
            onChange={handleChanges}
            id="duration"
          />
        </p>
        <p>
          <input
            placeholder="Intensity"
            name="intensity"
            onChange={handleChanges}
            id="intensity"
          />
        </p>
        <p>
          <input
            placeholder="Location"
            name="location"
            onChange={handleChanges}
            id="location"
          />
        </p>
        <p>
          <input
            placeholder="Registered Users"
            name="registered"
            onChange={handleChanges}
            id="registered"
          />
        </p>
        <p>
          <input
            placeholder="Max Class Size"
            name="max_size"
            onChange={handleChanges}
            id="max_size"
          />
        </p>
        <Button onClick={onSubmit}>Add New Class</Button>
      </form>
    </div>
  );
};

export default CreateClass;
