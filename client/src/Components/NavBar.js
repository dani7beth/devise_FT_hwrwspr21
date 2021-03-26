import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>Devise-App</Navbar.Brand>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        {/* <Nav.link href="/register">Register</Nav.link> */}
      </Nav>
    </Navbar>
  );
};
export default NavBar;
