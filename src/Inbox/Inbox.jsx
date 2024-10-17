import './Inbox.css'
import Insidemenu from './InboxCOMPO/InSideMenu'
import Inallchat from './InboxCOMPO/InAllChat'
import Inchat from './InboxCOMPO/InChat'
import { Outlet } from 'react-router-dom'

export default function Inbox() {
    return (
        <>
            <main className="inboxmain">
                <Insidemenu />
                <Outlet/>
            </main>
        </>
    )
}