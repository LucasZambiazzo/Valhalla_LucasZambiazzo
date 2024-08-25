
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
      
import { CartWidget } from "./CartWidget";
export const NavBar = () => (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Fragancias">
            Fragancias
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Maquillaje">
            Maquillaje
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

    {/*
   <h4>Valhalla Perfumería</h4>
   <ul>
    <li><a href="#">Fragancias</a></li>
    <li><a href="#">Maquillaje</a></li>
    <li><a href="#">Marcas</a></li>
   </ul>
   */}

</> 
);
