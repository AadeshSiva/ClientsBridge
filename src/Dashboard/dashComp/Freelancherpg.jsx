import React, { useState } from "react";
import tfreelancher from "../../assets/svg/tfreelancer.svg";
import pending from "../../assets/svg/pending.svg";
import orders from "../../assets/svg/order.svg";
import companyorder from "../../assets/svg/com-order.svg";
import totalorder from "../../assets/svg/total-order.svg";
import grow from "../../assets/svg/grow.svg";
import "../dash.css";
import freelancerpending from "../../assets/svg/freelancerpending.svg"

const freelancher = () => {
    const [freelancer,setFreelancher]=useState([
        {
          topic: "Ongoing Orders",
          img: orders,
          value: 8460,
          result: "8.5% Up from yesterday",
        },
        {
          topic: "Completed orders",
          img: companyorder,
          value: 8460,
          result: "8.5% Up from yesterday",
        },
        {
          topic: "Incomplete Projects",
          img:freelancerpending ,
          value: 8460,
          result: "8.5% Up from yesterday",
        },{
          topic: "Total Pending",
          img: pending,
          value: 8460,
          result: "8.5% Up from yesterday",
        },{
          topic: "Total Freelancers",
          img: tfreelancher,
          value: 8460,
          result: "8.5% Up from yesterday",
        },
        {
          topic: "Total Orders",
          img: totalorder,
          value: 8460,
          result: "8.5% Up from yesterday",
        }
      ])
  return (
    <div className="pgs">
     <header>
        <h1>Freelancers</h1>
      </header>
      <div className="carts">
        {freelancer.map((details, index) => (
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

export default freelancher
