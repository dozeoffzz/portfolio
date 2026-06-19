import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Header />}
      <Outlet />
    </div>
  );
}
