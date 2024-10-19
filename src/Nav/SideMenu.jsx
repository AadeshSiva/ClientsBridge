import React from "react";
import "../Nav/Nav.css";
import logo from "../assets/image/logo.svg";
import TopNav from "./TopNav.jsx";

import { Link, useLocation } from "react-router-dom";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAppRegistration } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const SideMenu = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <TopNav/>
      <div className="Nav-top">
        <header>
          <img src={logo} alt="profileImg" />
          <h2>CLIENTSBRIDGE</h2>
        </header>
        <div className="sideContent">
          <ul>
            <li className={location.pathname === "/" || location.pathname === "dashboard"  ? "active" : ""}>
              <div className="side"></div>
              <Link className="ln" to="/">
                <h2><LuLayoutDashboard/></h2>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className={location.pathname.includes("/registration") ?  "active" : ""}>
              <div className="side"></div>
              <Link className="ln" to="/registration">
                <h2><MdOutlineAppRegistration /></h2>
                <p>Registration</p>
              </Link>
            </li>
            <li className={location.pathname.includes("/inbox") ? "active" : ""}>
              <div className="side"></div>
              <Link className="ln" to="/inbox">
                <h2><AiOutlineMessage /></h2>
                <p>Inbox</p>
              </Link>
            </li>
            <li className={location.pathname.includes("/order") ? "active" : ""}>
              <div className="side"></div>
              <Link className="ln" to="/order">
                <h2><GiWallet /></h2>
                <p>Order List</p>
              </Link>
            </li>
            <li className={location.pathname.includes("/transaction") ? "active" : ""}>
              <div className="side"></div>
              <Link className="ln" to="/transaction">
                <h2><IoShieldCheckmark /></h2>
                <p>Transaction</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Logout">
        <ul>
          <li>
            <h2><IoSettingsOutline /></h2>
            <p>Setting</p>
          </li>
          <li>
            <h2><IoLogOutOutline /></h2>
            <p>Log out</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
