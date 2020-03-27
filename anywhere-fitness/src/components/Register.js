import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { withFormik, Form, Field} from "formik";
import styled from "styled-components";
import axios from "axios";

const Input = styled.input`
  width: 20%;
  margin: 5px 0 0;
  display: block;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: all 0.3s;
  font-size: 1.4rem;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
    border-color: #1ee7e2;
  }

  &:placeholder {
    color: #a8b2b2;
  }
`;

const Button = styled.button`
  width: 150px;
  display: inline-block;
  padding: 8px 11px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: bold;
  background-color: #4dd0e1;
  background-image: linear-gradient(to right, #4dd0e1, #1ee7e2);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin:20px;

  &:hover {
    background-image: none;
    background-color: #4dd0e1;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background-image: none;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
`;

const Error = styled.p`
  font-size: 1.2rem;
  color: red;
`;
function FormComponent({ errors, touched, isValid }) {
    const [user, setUser] = useState({ username: "", email: "", password: "", client: false, instructor: false });

    const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    return (
      <Form>
        <h1> Register here </h1>
        <label htmlFor="name">
          Username
          <Field as={Input}
           name="name" 
           aria-required="true" />
          {touched.name && errors.name ? <Error>{errors.name}</Error> : null}
        </label>
        <label htmlFor="email">
          Email
          <Field as={Input}
           name="email" 
           aria-required="true" />
          {touched.email && errors.email ? <Error>{errors.email}</Error> : null}
        </label>
        <label htmlFor="password">
          Password
          <Field
            as={Input}
            type="password"
            name="password"
            aria-required="true"
          />
          {touched.password && errors.password ? (
            <Error>{errors.password}</Error>
          ) : null}
        </label>
        <label htmlFor=" client">
          Client
          <Field
            type = "checkbox"
            name="client"
            
            
          />
          {touched.client && errors.client ? (
            <Error>{errors.client}</Error>
          ) : null}
        </label>
        <label htmlFor=" instructor">
          Instructor
          <Field
            type= "checkbox"
            name="instructor"
            
           
          />
          {touched.instructor && errors.instructor ? (
            <Error>{errors.instructor}</Error>
          ) : null}
        </label>
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </Form>
    );
  }
  
  export default withFormik({
    mapPropsToValues: props => ({
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      client: props.client || false,
      instructor: props.instructor || false
    }),
    validationSchema: yup.object().shape({
      name: yup
      .string().required("Username is required."),
      email: yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
      
      password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is Required"),
        
    }),
      

      handleSubmit: (values) => {
      console.log("Submitted!",values)
      axios.post("http://anytime-fitness-be.herokuapp.com/api/auth/register",values)
      .then(console.log("Success"))
      .catch(error => {console.log(error)})
    }
  })(FormComponent)
  