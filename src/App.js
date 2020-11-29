import React from "react";
import Layout from "./layout/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/nooblog">
      <Layout />
    </BrowserRouter>
  );
}

export default App;
