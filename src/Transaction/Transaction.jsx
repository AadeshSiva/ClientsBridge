import './Transaction.css'
import totalinv from '../assets/image/transaction1.svg'
import noofinv from '../assets/image/transaction2.svg'
import rateofrtn from '../assets/image/transaction3.svg'
import { IoTrendingUp } from "react-icons/io5";
import { IoTrendingDownSharp } from "react-icons/io5";

import { useSelector } from 'react-redux';

export default function Transaction() {
    // const transactions = useSelector(state => state.transactionData);

    const transactions = [
        { id: 1, name: 'Spotify Subscription', number: '#12548796', category: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', status: 'up', color: 'rgb(0, 195, 0)' },
        { id: 2, name: 'Kubert Subscription', number: '#982548796', category: 'Shopping', card: '1234 ****', date: '29 Jan, 12.30 AM', status: 'down', color: 'red' },
        { id: 3, name: 'Netflix Subscription', number: '#56893214', category: 'Entertainment', card: '4321 ****', date: '30 Jan, 2.00 PM', status: 'up', color: 'rgb(0, 195, 0)' },
        { id: 4, name: 'Amazon Prime Subscription', number: '#34567890', category: 'Entertainment', card: '9876 ****', date: '31 Jan, 3.45 PM', status: 'down', color: 'red' },
        { id: 5, name: 'Adobe Creative Cloud', number: '#19283746', category: 'Software', card: '1234 ****', date: '01 Feb, 11.00 AM', status: 'up', color: 'rgb(0, 195, 0)' },
        { id: 6, name: 'Only-Fans Subscription', number: '#56893214', category: 'Entertainment', card: '4321 ****', date: '30 Jan, 2.00 PM', status: 'up', color: 'rgb(0, 195, 0)' },
        { id: 7, name: 'GitHub Pro Subscription', number: '#83920176', category: 'Software', card: '5678 ****', date: '02 Feb, 4.15 PM', status: 'down', color: 'red' }
    ];

    return (
        <>
            <main className="transaction-container">
                <div className="transaction-top">
                    <div className="transtopinner">
                        <img src={totalinv} alt="" className="transtopimg" />
                        <div className="transtoptxt">
                            <p className="transtoplabel">Total Invested Amount</p>
                            <p className="transtopval">$150,000</p>
                        </div>
                    </div>
                    <div className="transtopinner">
                        <img src={noofinv} alt="" className="transtopimg" />
                        <div className="transtoptxt">
                            <p className="transtoplabel">Number of Investments</p>
                            <p className="transtopval">1,250</p>
                        </div>
                    </div>
                    <div className="transtopinner">
                        <img src={rateofrtn} alt="" className="transtopimg" />
                        <div className="transtoptxt">
                            <p className="transtoplabel">Rate of Return</p>
                            <p className="transtopval">+5.80%</p>
                        </div>
                    </div>
                </div>
                <p className="trantopic">Recent Transaction</p>
                <div className="tran-tablecon">
                    <table className="tran-table">
                        <thead className="tran-thead">
                            <tr>
                                <th>Description</th>
                                <th>Transaction ID</th>
                                <th>Type</th>
                                <th>Card</th>
                                <th>Date</th>
                                <th>Account Details</th>
                            </tr>
                        </thead>
                        <tbody className="tran-tbody">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="tranfirst">
                                        <span style={{ color: transaction.color }} className="tranicon">
                                            {transaction.status === 'up' ? <IoTrendingUp /> : <IoTrendingDownSharp />}
                                        </span>
                                        {transaction.name}
                                    </td>
                                    <td>{transaction.number}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.card}</td>
                                    <td>{transaction.date}</td>
                                    <td><span className="tranviewbtn">View</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}