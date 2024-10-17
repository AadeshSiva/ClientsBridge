import React from 'react'
import '../Nav/Nav.css'
import search from '../assets/image/search.svg'
import back from '../assets/image/back.svg'
import profileImg from '../assets/image/profileImg.svg'
import more from '../assets/image/more.svg'

const TopNav = () => {
  return (
    <div className='topNav'>
      <div className="search-back">
        <img src={back} alt="back" style={{ cursor: 'pointer' }} onClick={() => window.history.back()} />
        <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="profile">
        <img src={profileImg} alt="profileImg" />
        <div className="profile-about">
          <h4>Jayasree</h4>
          <p>Admin</p>
        </div>
        <img src={more} alt="more" />
      </div>
    </div>
  )
}

export default TopNav
