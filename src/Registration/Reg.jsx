import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./FreelancerReg/FreelancerReg.css";
import "./Reg.css";
import { Provider } from 'react-redux';
import regStore from "./RegData/RegStore";

const FreelancerReg = () => {
  const location = useLocation();
  const isFreelancerPro = location.pathname.includes("/freelancer/");

  return (
    <>
      <main className="registration-container">
        {!isFreelancerPro ? (
          <div className="tabs">
            <div className="tab-titles">
              <Link
                to="client"
                className={location.pathname.includes("client") || location.pathname === "/registration" ? "active" : ""}
              >
                <p>Client</p>
                <p>|</p>
              </Link>
              <Link
                to="freelancer"
                className={location.pathname.includes("freelancer") ? "active" : ""}
              >
                <p>Freelancer</p>
              </Link>
              <Link
                to="company"
                className={location.pathname.includes("company") ? "active" : ""}
              >
                <p>|</p>
                <p>Company</p>
              </Link>
            </div>
          </div>
        ) : null} 

        <Provider store={regStore}>
          <Outlet />
        </Provider>
      </main>
    </>
  );
};

export default FreelancerReg;
