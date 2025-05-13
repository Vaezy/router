import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/categorie/vetements">
              Vêtements
            </Nav.Link>
            <Nav.Link as={Link} to="/categorie/chaussures">
              Chaussures
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
