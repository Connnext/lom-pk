import React from "react";
import "./styles/reset.css";
import "./styles/main.css";
import AppRoutes from "./routes/Routes.jsx";
import BackToTopButton from "./components/elements/buttons/backToTopButton/BackToTopButton.jsx";

function App() {
  return (
    <div className="app">
      <AppRoutes />
      <BackToTopButton />
    </div>
  );
}
export default App;
