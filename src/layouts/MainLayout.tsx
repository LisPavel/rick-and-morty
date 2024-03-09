import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import "./MainLayout.scss";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "home",
  },
  {
    label: <NavLink to="/episodes">Episodes</NavLink>,
    key: "episodes",
  },
  {
    label: <NavLink to="/locations">Locations</NavLink>,
    key: "locations",
  },
  {
    label: <NavLink to="/characters">Characters</NavLink>,
    key: "characters",
  },
  {
    label: <NavLink to="/plumbus">Plumbus</NavLink>,
    key: "plumbus",
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
