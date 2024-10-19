import React, { useState } from 'react'
import '../Nav/Nav.css'
import search from '../assets/image/search.svg'
import back from '../assets/image/back.svg'
import profileImg from '../assets/image/profileImg.svg'
import more from '../assets/image/more.svg'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom'

const TopNav = () => {
  const [gsearch, setgsearch] = useState('')

  const suggestions = [
    { name: 'Client Registration', path: '/registration/client' },
    { name: 'Freelancer Registration', path: '/registration/freelancer' },
    { name: 'Company Registration', path: '/registration/company' },
    { name: 'All Messages', path: '/inbox' },
    { name: 'All Projects', path: '/order' },
    { name: 'Active Members', path: '/order' },
    { name: 'Recent Transactions', path: '/transaction' }
    
  ]

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.name.toLowerCase().includes(gsearch.toLowerCase())
  )

  return (
    <>
      <div className='topNav'>
        <img className='backbtn' src={back} alt="back" style={{ cursor: 'pointer' }} onClick={() => window.history.back()} />
        <div className="search">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder='Search'
            value={gsearch}
            onChange={(e) => setgsearch(e.target.value)}
          />
        </div>
        <div className="profile">
          <img src={profileImg} alt="profileImg" />
          <div className="profile-about">
            <h4>Jayasree</h4>
            <p>Admin</p>
          </div>
          <img src={more} alt="more" />
        </div>

        {gsearch && (
          <div className="searchsuggestioncon">
            <ul>
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion, index) => (
                  <li key={index}>
                    <GoArrowUpRight />
                    <Link onClick={() => { setgsearch('') }} className='gslink' to={suggestion.path}>{suggestion.name}</Link>
                  </li>
                ))
              ) : (
                <li>🚫 No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default TopNav
