import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="plumbus">Plumbus</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
