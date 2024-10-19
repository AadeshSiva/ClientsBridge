import React from "react";
import "./dash.css";
import Dashpg from "./dashComp/dashpg";
import Freelancerpg from "../Dashboard/dashComp/Freelancherpg"
import Company  from "../Dashboard/dashComp/company"
import Client from '../Dashboard/dashComp/Client'
import ActiveProject from "./dashComp/ActiveProject";
const Dashboard = () => {
  
 
 
  return (
    <div className="dashboard-page">
     <Dashpg/>
     <Freelancerpg/>
     <Company/>
     <Client/>
     <ActiveProject/>
    </div>
    
  );
};

export default Dashboard;
