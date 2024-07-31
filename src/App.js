import React from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import BackToTopButton from "./components/elements/buttons/backToTopButton/BackToTopButton.jsx";
import ScrollToTop from "components/modules/scrollToTop/ScrollToTop";
import useCleanupOnRouteChange from "hooks/useCleanupOnRouteChange.js";
import Breadcrumbs from "components/modules/breadcrumbs/Breadcrumbs.jsx";
import "./styles/reset.css";
import "./styles/main.css";

function App() {
  useCleanupOnRouteChange();
  return (
    <div className="app">
      <ScrollToTop />

      <AppRoutes />
      <BackToTopButton />
    </div>
  );
}

export default App;
