import '../Inbox.css'
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import dp from '../../assets/dp.png'
import { Link } from 'react-router-dom';
export default function Inchat() {
    const getCategoryStyle = (category) => {
        switch (category) {
            case 'Primary':
                return { backgroundColor: '#00b69b3e', color: '#00b69b3e' };
            case 'Work':
                return { backgroundColor: '#fd99563f', color: '#fd9a56' };
            case 'Friend':
                return { backgroundColor: '#d356fd3f', color: '#d456fd' };
            case 'Social':
                return { backgroundColor: '#5a8cff39', color: '#5a8cff' };
            default:
                return { backgroundColor: 'grey', color: 'black' };
        }
    };
    return (
        <>
            <section className="inboxchatmain">
                <article className="inboxchatinner">
                    <header className="inboxchattop">
                        <Link to='/inbox' className="backbtn"><IoIosArrowBack /></Link>
                        <p className="chatname">Munnusamy Ayanar</p>
                        <span style={getCategoryStyle('Social')} className="chatcategory chatchatcategory">Social</span>
                    </header>
                    {/*  */}
                    <div className="messagesbody">
                        <div className="messagecon">
                            <div className="chatuserprofile">
                                <img src={dp} alt="User Profile" />
                            </div>
                            <div className="messagebody">
                                <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, adipisci accusantium tempora numquam. Architecto doloremque maiores libero facere.</p>
                                <p className="messagetime">10:30 AM  <span style={{ marginLeft: '0.7em', cursor: 'pointer' }}><BsThreeDotsVertical /></span></p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="messagecon oppositemsgcon">
                        <div className="messagebody oppositemsgbody">
                            <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, adipisci accusantium tempora numquam. Architecto doloremque maiores libero facere.</p>
                            <p className="messagetime">10:30 AM  <span style={{ marginLeft: '0.7em', cursor: 'pointer' }}><BsThreeDotsVertical /></span></p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="messagesbody">
                        <div className="messagecon">
                            <div className="chatuserprofile">
                                <img src={dp} alt="User Profile" />
                            </div>
                            <div className="messagebody">
                                <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, adipisci accusantium tempora numquam. Architecto doloremque maiores libero facere.</p>
                                <p className="messagetime">10:30 AM  <span style={{ marginLeft: '0.7em', cursor: 'pointer' }}><BsThreeDotsVertical /></span></p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="messagecon oppositemsgcon">
                        <div className="messagebody oppositemsgbody">
                            <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, adipisci accusantium tempora numquam. Architecto doloremque maiores libero facere.</p>
                            <p className="messagetime">10:30 AM  <span style={{ marginLeft: '0.7em', cursor: 'pointer' }}><BsThreeDotsVertical /></span></p>
                        </div>
                    </div>{/*  */}
                    <div className="messagesbody">
                        <div className="messagecon">
                            <div className="chatuserprofile">
                                <img src={dp} alt="User Profile" />
                            </div>
                            <div className="messagebody">
                                <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, adipisci accusantium tempora numquam. Architecto doloremque maiores libero facere.</p>
                                <p className="messagetime">10:30 AM  <span style={{ marginLeft: '0.7em', cursor: 'pointer' }}><BsThreeDotsVertical /></span></p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="messagecon oppositemsgcon">
                        <div className="messagebody oppositemsgbody">
                            <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, adipisci accusantium tempora numquam. Architecto doloremque maiores libero facere.</p>
                            <p className="messagetime">10:30 AM  <span style={{ marginLeft: '0.7em', cursor: 'pointer' }}><BsThreeDotsVertical /></span></p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}