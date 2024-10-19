import React, { useState } from 'react'
import dashprofile from "../../assets/svg/dashprofile.svg";
import tfreelancher from "../../assets/svg/tfreelancer.svg";
import tcompany from "../../assets/svg/tcompany.svg";
import pending from "../../assets/svg/pending.svg";
import orders from "../../assets/svg/order.svg";
import pendingorders from "../../assets/svg/pendingorder.svg";
import companyorder from "../../assets/svg/com-order.svg";
import totalorder from "../../assets/svg/total-order.svg";
import loginuser from "../../assets/svg/users.svg";
import grow from "../../assets/svg/grow.svg";
import "../dash.css";

const dashpg = () => {
  const [dashboard, setDashBoard] = useState([
    {
      topic: "Total User",
      img: dashprofile,
      value: 40689,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Total Freelancer",
      img: tfreelancher,
      value: 10293,
      result: "1.3% Up from past week",
    },
    {
      topic: "Total Company",
      img: tcompany,
      value: 2040,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Request Pending",
      img: pending,
      value: 4000,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Active Orders",
      img: orders,
      value: 1293,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Pending Orders",
      img: pendingorders,
      value: 2707,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Completed Orders",
      img: companyorder,
      value: 9000,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Total Orders",
      img: totalorder,
      value: 8460,
      result: "8.5% Up from yesterday",
    },
    {
      topic: "Logined Users",
      img: loginuser,
      value: 53724,
      result: "1.8% Up from yesterday",
    },
  ]);
  return (
      <div className="pgs">
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="carts">
        {dashboard.map((details, index) => (
          <div className="cart" key={index}>
            <div className="cart-about">
              <div className="about-user">
                <p>{details.topic}</p>
                <h1>{details.value}</h1>
              </div>
              <img src={details.img} alt={details.topic} />
            </div>
            <div className="cart-result">
              <img src={grow} alt="Growth Indicator" />
              <p>{details.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default dashpg
