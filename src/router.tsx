import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { Router };
