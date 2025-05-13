import { Route, Routes } from "react-router";
import { Category } from "./Category";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:category" element={<Category />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
