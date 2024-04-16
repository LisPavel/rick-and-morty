import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import type { MenuProps } from "antd";
import { Layout, Menu, Spin } from "antd";
import { ErrorBoundary } from "../../components/ErrorBoundary";
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
    label: <NavLink to="/login">Login</NavLink>,
    key: "login",
  },
];

export const MainLayout = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      className="main-layout"
    >
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
        <Suspense
          fallback={
            <Spin
              tip="Loading..."
              size="large"
              style={{
                top: "50%",
                left: "50%",
                position: "fixed",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <div></div>
            </Spin>
          }
        >
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </Content>
    </Layout>
  );
};
