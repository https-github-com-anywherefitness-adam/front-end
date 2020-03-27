import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const CreateClass = () => {
  const [newClass, setNewClass] = useState({
    name: "",
    type: "",
    start_time: "",
    duration: "",
    intensity: "",
    location: "",
    registered: "",
    max_size: ""
  });

  const handleChanges = e => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axios
      .post("https://anytime-fitness-be.herokuapp.com/api/class", newClass)
      .then(res => {
        console.log("class data", res);
        setNewClass(res.data);
      })
      //  .then(history.push("/"))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Create New Class</button>
      </form>
    </div>
  );
};

export default CreateClass;
