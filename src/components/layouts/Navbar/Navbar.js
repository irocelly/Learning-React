import { Header } from "antd/es/layout/layout";

const Navbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
    </Header>
  );
};

export default Navbar;
