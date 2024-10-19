import '../OrderList.css'
import { IoTrendingUp } from "react-icons/io5";
import { IoTrendingDownSharp } from "react-icons/io5";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AllOrders() {
    // const transactions = useSelector(state => state.transactionData);
    const orderlist = [
        { id: 1, pname: 'Project A', clients: 'Jaii', phone: '9897975345', email: 'jaii@gmail.com', country: 'India' },
        { id: 2, pname: 'Project B', clients: 'Anya', phone: '9876543210', email: 'anya@gmail.com', country: 'USA' },
        { id: 3, pname: 'Project C', clients: 'Michael', phone: '9765432109', email: 'michael@yahoo.com', country: 'UK' },
        { id: 4, pname: 'Project D', clients: 'Sara', phone: '9654321098', email: 'sara@hotmail.com', country: 'Australia' },
        { id: 5, pname: 'Project E', clients: 'Liam', phone: '9543210987', email: 'liam@outlook.com', country: 'Canada' },
        { id: 6, pname: 'Project F', clients: 'Olivia', phone: '9432109876', email: 'olivia@gmail.com', country: 'New Zealand' },
        { id: 7, pname: 'Project G', clients: 'Noah', phone: '9321098765', email: 'noah@yahoo.com', country: 'Germany' },
        { id: 8, pname: 'Project H', clients: 'Emma', phone: '9210987654', email: 'emma@hotmail.com', country: 'France' },
        { id: 9, pname: 'Project I', clients: 'James', phone: '9109876543', email: 'james@gmail.com', country: 'Japan' },
        { id: 10, pname: 'Project J', clients: 'Ava', phone: '9098765432', email: 'ava@outlook.com', country: 'China' },
        { id: 11, pname: 'Project K', clients: 'Sophia', phone: '8987654321', email: 'sophia@gmail.com', country: 'Brazil' }
    ];


    return (
        <>
            <main className="orderlist-container">
                <p className="ordertopic">All Projects</p>
                <p className="ordertxtmin">Active Members</p>
                <div className="order-tablecon">
                    <table className="order-table">
                        <thead className="order-thead">
                            <tr>
                                <th>Projects Name</th>
                                <th>Clients</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th style={{ marginLeft: '4em' }}>About</th>
                            </tr>
                        </thead>
                        <tbody className="order-tbody">
                            {orderlist.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.pname}</td>
                                    <td>{transaction.clients}</td>
                                    <td>{transaction.phone}</td>
                                    <td>{transaction.email}</td>
                                    <td>{transaction.country}</td>
                                    <td><Link to={`/order/${transaction.id}`} className="orderviewbtn">View</Link></td>                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}