import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //handleUserLogin({email, password}, props.history)
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;
