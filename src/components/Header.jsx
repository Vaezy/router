import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useMatch } from "react-router";
import "../assets/styles/header.css";

export const Header = () => {
  const match = useMatch("/categorie/:category");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {match
          ? `Catégorie : ${match.params.category}`
          : "Bienvenue sur le site"}
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categorie/vetements">
              Vêtements
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categorie/chaussures">
              Chaussures
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
