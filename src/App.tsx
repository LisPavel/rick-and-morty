import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
