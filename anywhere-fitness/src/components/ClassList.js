import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const ClassList = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then(res => {
        console.log(res.data);
        setClassList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>Class List</h2>
    </>
  );
};
