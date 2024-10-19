import './App.css';

import SideMenu from "./Nav/SideMenu.jsx";
// -----------------------------------------DASHBOARD----------------------------------
import Dashboard from './Dashboard/Dashboard.jsx';
// -----------------------------------------REGISTRATION----------------------------------
import Registration from './Registration/Reg.jsx';
import FreelancerReg from './Registration/FreelancerReg/FreelancerReg.jsx';
import FreelancerProfile from './Registration/FreelancerReg/FreelancerCompo/FreelancerProfile.jsx';
import ClientReg from './Registration/ClientReg/ClientReg.jsx';
import CompanyReg from './Registration/CompanyReg/CompanyReg.jsx';

// -----------------------------------------INBOX----------------------------------
import Inbox from './Inbox/Inbox';
import Inallchat from './Inbox/InboxCOMPO/InAllChat';
import Inchat from './Inbox/InboxCOMPO/InChat';

// -----------------------------------------OrderList----------------------------------
import OrderList from './OrderList/OrderList.jsx';
import AllOrders from './OrderList/OrderListCompo/AllOrders.jsx';
import OrderDetail from './OrderList/OrderListCompo/Order.jsx';

// -----------------------------------------Transaction----------------------------------
import Transaction from './Transaction/Transaction.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="notformobile">The admin is currently unavailable on mobile.</div>
      <main className="admin-container">
        <Router>
          <SideMenu />
          <Routes>
            <Route index element={<Dashboard />} />
            {/* -----------------------------------------DASHBOARD---------------------------------- */}
            {/* <Route path='/dashboard' element={<Dashboard />} /> */}

            {/* <Route index element={<ClientReg />} />
              <Route path='client' element={<ClientReg />} />
              <Route path='freelancer' element={<FreelancerReg />} />
              <Route path='freelancer/:id' element={<FreelancerProfile />} />
              <Route path='company' element={<CompanyReg />} />
            </Route> */}
            {/* -----------------------------------------REGISTRATION---------------------------------- */}
            <Route path='/registration' element={<Registration />} >
              <Route index element={<ClientReg />} />
              <Route path='client' element={<ClientReg />} />
              <Route path='freelancer' element={<FreelancerReg />} />
              <Route path='freelancer/:id' element={<FreelancerProfile />} />
              <Route path='company' element={<CompanyReg />} />
            </Route>

            {/* -----------------------------------------INBOX---------------------------------- */}
            <Route path="/inbox" element={<Inbox />} >
              <Route index element={<Inallchat />} />
              <Route path='bin' element={<Inallchat />} />
              <Route path='chat' element={<Inchat />} />
            </Route>

            {/* -----------------------------------------OrderList---------------------------------- */}
            <Route path="/order" element={<OrderList />} >
              <Route index element={<AllOrders />} />
              <Route path=":orderid" element={<OrderDetail />} />
            </Route>

            {/* -----------------------------------------Transaction---------------------------------- */}
            <Route path="/transaction" element={<Transaction />} />

          </Routes>
        </Router>
      </main>
    </>
  );
}
