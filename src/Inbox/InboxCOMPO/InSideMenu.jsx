import '../Inbox.css';
import { LuMail } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

export default function InboxSideMenu() {
    const location = useLocation();
    const currentPath = location.pathname;

    let count = 100;
    let bin = 10;

    return (
        <>
            <section className="inboxsidemenumain">
                <article className="inboxsidemenuinner">
                    <p className="composebtn">+ Compose</p>
                    <p className="messagetxt">Messages</p>
                    <Link
                        to=''
                        className="messageopt inmessages"
                        style={{
                            backgroundColor: currentPath === '/inbox' ? '#487fff27' : 'transparent',
                            color: currentPath === '/inbox' ? '#4880ff' : 'black'
                        }}
                    >
                        <LuMail />Messages <span>{count}</span>
                    </Link>
                    <Link
                        to='bin'
                        className="messageopt inbin"
                        style={{
                            backgroundColor: currentPath === '/inbox/bin' ? '#487fff27' : 'transparent',
                            color: currentPath === '/inbox/bin' ? '#4880ff' : 'black'
                        }}
                    >
                        <RiDeleteBinLine />Bin <span>{bin}</span>
                    </Link>
                </article>
                <article className="inboxsidemenuinnermob">
                    <p className="composebtn">+</p>
                    <Link
                        to=''
                        className="messageopt inmessages"
                        style={{
                            backgroundColor: currentPath === '/inbox' ? '#487fff27' : 'transparent',
                            color: currentPath === '/inbox' ? '#4880ff' : 'black'
                        }}
                    >
                        <LuMail />
                    </Link>
                    <Link
                        to='bin'
                        className="messageopt inbin"
                        style={{
                            backgroundColor: currentPath === '/inbox/bin' ? '#487fff27' : 'transparent',
                            color: currentPath === '/inbox/bin' ? '#4880ff' : 'black'
                        }}
                    >
                        <RiDeleteBinLine />
                    </Link>
                </article>
            </section>
        </>
    );
}
