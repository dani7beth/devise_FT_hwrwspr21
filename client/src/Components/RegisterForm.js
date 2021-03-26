import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const RegisterForm = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      //handleUserRegister(user, props.history)
    } else {
      <Alert variant="danger">Passwords to not match! Try again.</Alert>;
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>NickName</Form.Label>
      <Form.Control
        type="text"
        name="nickname"
        value={user.nickname}
        onChange={handleChange}
      />
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
      />
      <Button variant="success" type="submit">
        Register
      </Button>
    </Form>
  );
};
export default RegisterForm;
