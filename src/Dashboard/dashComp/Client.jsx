import React, { useState } from "react";
import orders from "../../assets/svg/order.svg";
import companyorder from "../../assets/svg/com-order.svg";
import grow from "../../assets/svg/grow.svg";
import "../dash.css";
import freelancerpending from "../../assets/svg/freelancerpending.svg"

const freelancher = () => {
    const [clients,setClients]=useState([
        {
          topic: "Total Clients",
          img: orders,
          value: 8460,
          result: "8.5% Up from yesterday",
        },
        {
          topic: "Active Clients",
          img: companyorder,
          value: 8460,
          result: "8.5% Up from yesterday",
        },
        {
          topic: "Dormant Orders",
          img:freelancerpending ,
          value: 8460,
          result: "8.5% Up from yesterday",
        }
      ])
  return (
    <div className="pgs">
     <header>
        <h1>Clients</h1>
      </header>
      <div className="carts">
        {clients.map((details, index) => (
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
