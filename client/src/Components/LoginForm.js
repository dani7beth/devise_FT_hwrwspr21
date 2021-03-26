import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../Providers/UserProvider";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleLogin({ email, password }, props.history);
  };
  // const handleChange = (e) => {
  //   setEmail(e.target.value);
  //   setPassword(e.target.value);
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;
