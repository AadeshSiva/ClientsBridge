import React, { useState } from 'react'
import more from '../../assets/image/more.svg'
import orders from "../../assets/svg/order.svg";

const ActiveProject = () => {
    const [heading , setHeading]=useState(["Project Name","Hours","Priority","Amount","Progress"])
    const [rows, setRows] = useState([
        { projectName: "Project A", hours: 40, priority: "High", amount: "$4000", progress: "80%" },
        { projectName: "Project B", hours: 30, priority: "Medium", amount: "$3000", progress: "60%" },
        { projectName: "Project C", hours: 20, priority: "Low", amount: "$2000", progress: "40%" },
        { projectName: "Project A", hours: 40, priority: "High", amount: "$4000", progress: "80%" },
        { projectName: "Project B", hours: 30, priority: "Medium", amount: "$3000", progress: "60%" },
        { projectName: "Project C", hours: 20, priority: "Low", amount: "$2000", progress: "40%" }, 
        { projectName: "Project A", hours: 40, priority: "High", amount: "$4000", progress: "80%" },
        { projectName: "Project B", hours: 30, priority: "Medium", amount: "$3000", progress: "60%" },
        { projectName: "Project C", hours: 20, priority: "Low", amount: "$2000", progress: "40%" },
      ]);
  return (
    <div className='activeProject'>
      <div className="active-box">
        <header>
            <h2>Active Project</h2>
            <div className="month">
                <p>october</p>
                <img src={more} alt="" />
            </div>
        </header>
        <div className="table">
        <table>
            <thead>
                <tr>
                {heading.map((details,index)=>(
                    <th key={index}>{details}</th>
                ))}
                </tr>
                
            </thead>
            <tbody>
                {rows.map((details,index)=>(
                    <tr key={index}>
                        <td className='first-col'>
                            <img src={orders} alt="" />
                            <p>{details.projectName}</p>   
                        </td>
                        <td>{details.hours}</td>
                        <td>{details.priority}</td>
                        <td>{details.amount}</td>
                        <td>{details.progress}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
      </div>
    </div>
  )
}

export default ActiveProject
