import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { TaxForm } from "./components/TaxForm";
import TaxesSubmissions from "./components/TaxesSubmissions";
import Header from "./components/Header.js";
import Context from "./context/UserContext";

const HomePage = React.lazy(() => import("./pages/Home"));

export const App = () => {
  const { token } = useContext(Context);
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        {token && <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/taxes/:id/:year" element={<TaxForm />} />
          <Route path="/taxes/submissions" element={<TaxesSubmissions />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
