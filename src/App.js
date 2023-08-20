import React from "react";
import "./App.css";
import Layout, { Content } from "antd/es/layout/layout";
import Navbar from "./components/layouts/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routeItems from "./route";

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Navbar />
        <Content>
          <Routes>
            {/* This Code below is for automatically assign the route from route.js */}
            {routeItems.map((item) => (
              <Route path={`/${item.key}`} element={item.element} />
            ))}
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
