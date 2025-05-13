import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container className="py-2" as="main">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
