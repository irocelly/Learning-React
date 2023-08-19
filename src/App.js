import React from "react";
import "./App.css";
import Layout, { Content } from "antd/es/layout/layout";
import Navbar from "./components/layouts/Navbar/Navbar";

function App() {
  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <h1>Hello World ! Our first project using Ant design</h1>
      </Content>
    </Layout>
  );
}

export default App;
