import React from "react";
import { Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const noNavFooter = location.pathname.includes("404");
  return (
    <div className="main-app-container">
      {/* without 404 navbar will show */}
      {!noNavFooter && <Navbar />}

      <main style={{ minHeight: "calc(100vh - 150px)", padding: "20px 0" }}>
        <Outlet></Outlet>
      </main>

      {/* without 404 footer will show */}
      {!noNavFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
