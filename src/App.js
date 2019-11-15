import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function App() {
  const { value } = useForm({
    email: "",
    password: ""
  });

  const handleChangeEmail = e => setEmail(e.target.value);

  const handleChangePassword = e => setPassword(e.target.value);

  return (
    <div className="App">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={value.email}
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
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

  return {
    value
  };
}
