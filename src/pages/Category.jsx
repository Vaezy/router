import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

export const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const hReturn = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Catégorie : {category}</h1>
      <Button variant="primary" onClick={hReturn}>
        Retour à la page d'accueil
      </Button>
    </div>
  );
};
