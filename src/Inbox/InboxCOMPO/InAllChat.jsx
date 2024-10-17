import React, { useState, useEffect } from 'react';
import '../Inbox.css';
import { IoSearch } from "react-icons/io5";
import { MdMoveToInbox, MdInfo, MdDelete } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { TbRestore } from "react-icons/tb";

import { Link, useLocation } from 'react-router-dom';

export default function InboxAllChat() {
    const [favoriteChats, setFavoriteChats] = useState([]);
    const [selectedChats, setSelectedChats] = useState([]);
    const [deletedChats, setDeletedChats] = useState([]);
    const [chatData, setChatData] = useState([
        { id: 1, name: "Jullu Jalal", category: "Friend", highlight: "Lorem ipsum dolor sit amet.", time: "11:00 AM" },
        { id: 2, name: "Ji Jii", category: "Work", highlight: "Meeting reminder", time: "12:00 PM" },
        { id: 3, name: "Mark", category: "Primary", highlight: "Project updates", time: "8:32 AM" },
        { id: 4, name: "Antony", category: "Social", highlight: "How are you", time: "10:20 AM" },
        { id: 5, name: "Herh", category: "Work", highlight: "What are you doing", time: "1:30 AM" },
        { id: 6, name: "kiomna", category: "Social", highlight: "project progress?", time: "8:40 AM" },
        { id: 7, name: "lmnhb", category: "Work", highlight: "payment details", time: "10:30 PM" },
        { id: 8, name: "qaecsa", category: "Primary", highlight: "any updates", time: "9:39 AM" }

    ]);
    const [searchChats, setSearchChats] = useState(chatData);

    const location = useLocation();
    const currentPath = location.pathname;

    const addfavchats = (id) => {
        setFavoriteChats((favoriteChats) =>
            favoriteChats.includes(id)
                ? favoriteChats.filter(chatId => chatId !== id)
                : [...favoriteChats, id]
        );
    };

    const addselectedchats = (id) => {
        setSelectedChats(selectedChats =>
            selectedChats.includes(id)
                ? selectedChats.filter(chatId => chatId !== id)
                : [...selectedChats, id]
        );
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredChats = chatData.filter((chat) =>
            chat.name.toLowerCase().includes(searchTerm) ||
            chat.category.toLowerCase().includes(searchTerm) ||
            chat.highlight.toLowerCase().includes(searchTerm)
        );
        setSearchChats(filteredChats);
    };

    const handleDelete = () => {
        const updatedChats = chatData.filter(chat => !selectedChats.includes(chat.id));
        setChatData(updatedChats);
        setDeletedChats([...deletedChats, ...chatData.filter(chat => selectedChats.includes(chat.id))]);
        setSelectedChats([]);
        setSearchChats(updatedChats);
    };

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.includes('bin')) {
            setSearchChats(deletedChats);
        } else {
            setSearchChats(chatData);
        }
    }, [location, chatData, deletedChats]);

    useEffect(() => {
        console.log("Updated selected chats:", selectedChats);
        console.log("Updated deleted chats:", deletedChats);
        console.log("Updated favorite chats:", favoriteChats);
    }, [selectedChats, favoriteChats, deletedChats]);

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
        <section className="inboxallchatmain">
            <article className="inboxallchatinner">
                <header className="inboxallchattop">
                    <div className="allchatsearchcon">
                        <IoSearch />
                        <input
                            type="search"
                            className="allchatsearch"
                            placeholder='Search'
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="allchatoptionscon">
                        <div className="allchatopt"><MdMoveToInbox /></div>
                        <div className="allchatopt"><MdInfo /></div>
                        {currentPath.includes('bin') ? (
                            <div className="allchatopt" >
                                <TbRestore />
                            </div>
                        ) : (
                            <div className="allchatopt" onClick={handleDelete}>
                                <MdDelete />
                            </div>
                        )}
                    </div>
                </header>
                <div className="allchatbody">
                    {searchChats.map((chat) => (
                        <div className="chatcon" key={chat.id}>
                            <input
                                checked={selectedChats.includes(chat.id)}
                                type="checkbox"
                                className='chatselect'
                                onChange={() => addselectedchats(chat.id)}
                            />
                            <span className="chatfavcon">
                                <span className="befstaricon" style={{ display: favoriteChats.includes(chat.id) ? 'none' : 'block' }}>
                                    <FaRegStar />
                                </span>
                                <span className="aftrstaricon" style={{ display: favoriteChats.includes(chat.id) ? 'block' : 'none' }}>
                                    <FaStar />
                                </span>
                                <input
                                    type="checkbox"
                                    className='chatfav'
                                    checked={favoriteChats.includes(chat.id)}
                                    onChange={() => addfavchats(chat.id)}
                                />
                            </span>
                            <Link to='chat' className="chatlinkcon">
                                <p className="chatname">{chat.name}</p>
                                <span style={getCategoryStyle(chat.category)} className="chatcategory">{chat.category}</span>
                                <p className="chathighlight">{chat.highlight}</p>
                                <p className="chattime">{chat.time}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}
