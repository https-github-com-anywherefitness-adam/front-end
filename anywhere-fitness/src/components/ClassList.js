import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import CreateClass from "./CreateClass";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #ffc357;
  box-shadow: 2px 2px #d88144;
  border-radius: 1.5rem;
`;

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
      <CreateClass />
      <h2>Class List</h2>
      <Cards>
        {classList.map(singleclass => (
          <Card>
            <h3>Class Name: {singleclass.name}</h3>
            <h5>Class Type: {singleclass.type}</h5>
            <h5>Class Start Time: {singleclass.start_time}</h5>
            <h5>Duration: {singleclass.duration}</h5>
            <h5>Registered Attendees: {singleclass.registered}</h5>
            <h5>Max Class Size: {singleclass.max_size}</h5>
          </Card>
        ))}
      </Cards>
    </div>
  );
};

export default ClassList;
