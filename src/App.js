import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = e => setEmail(e.target.value);

  const handleChangePassword = e => setPassword(e.target.value);

  return (
    <div className="App">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={email}
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
            value={password}
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
