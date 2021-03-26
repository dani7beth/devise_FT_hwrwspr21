import { Nav, Navbar, NavbarBrand, NavLink } from "bootstrap-react";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <NavbarBrand>Devise-App</NavbarBrand>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
