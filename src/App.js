import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required()
});

function App() {
  const { value, handleChange, handleSubmit, checkValidity, errors, sendable } = useForm(
    {
      email: "",
      password: ""
    },
    schema
  );

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={value.email}
            onChange={handleChange}
            onBlur={checkValidity}
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            value={value.password}
            onChange={handleChange}
            onBlur={checkValidity}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
        {errors && errors.map(err => <p>{err}</p>)}

        <Button disabled={!sendable} color={sendable ? "success" : "danger"}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;

// The useForm function is created here just to show it easier with GitHistory.
// You should create a separate file for it.
export function useForm(initialState, schema) {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const [sendable, setSendable] = useState(false);

  useEffect(() => {
    checkValidity();
  }, [value]);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Send !");
  };

  const checkValidity = async () => {
    try {
      await schema.validate(value, { abortEarly: false });
      setErrors(null);
      setSendable(true);
    } catch (err) {
      setErrors(err.errors);
      console.log(err);
    }
  };

  return {
    value,
    handleChange,
    handleSubmit,
    checkValidity,
    errors,
    sendable
  };
}
