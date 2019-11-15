import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function App() {
  const { value, handleChange, handleSubmit } = useForm({
    email: "",
    password: ""
  });

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={value.email}
            onChange={handleChange}
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
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default App;

// The useForm function is created here just to show it easier with GitHistory.
// You should create a separate file for it.
export function useForm(initialState) {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted !");
  };

  return {
    value,
    handleChange,
    handleSubmit
  };
}
