import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const ClassList = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/class")
      .then(res => {
        console.log(res.data);
        setClassList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Class List</h2>
      {classList.map(singleclass => (
        <div>
          <p>Class Name: {singleclass.name}</p>
          <p>Class Type: {singleclass.type}</p>
          <p>Class Start Time: {singleclass.start_time}</p>
          <p>Duration: {singleclass.duration}</p>
          <p>Registered Attendees: {singleclass.registered}</p>
          <p>Max Class Size: {singleclass.max_size}</p>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
