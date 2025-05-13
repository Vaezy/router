import { useParams } from "react-router";

export const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Catégorie : {category}</h1>
    </div>
  );
};
