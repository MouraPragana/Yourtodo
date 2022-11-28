import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export { App };
