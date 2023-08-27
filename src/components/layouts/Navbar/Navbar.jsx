import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../route";
import styles from "./Navbar.module.css";

const { routeItems } = routes;

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header>
      <Menu
        style={{ backgroundColor: "#001529" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {routeItems.map((item) => (
          <Menu.Item key={item.key} className={styles.menuStyle}>
            <Link to={`/${item.key}`}>{item.label}</Link>
          </Menu.Item>
        ))}
        <Menu.Item key={"login"} className={styles.loginStyle}>
          <Link to={`/login`}>Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
