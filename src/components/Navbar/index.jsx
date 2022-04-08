import './navbar.css';

import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const alterDropdown = () => {
    setDropdownActive(!dropdownActive);
  }

  return (
    <>
      <div className='nav195OuterContainer valign-wrapper vspace-between'>
        <div className="nav195Item cur-po valign-wrapper">
          <span className='nav195Title'>
            {'<'}
          </span>
          <span className="nav195Title nav195TitleMain">
            AkshayKumarBarya
          </span>

          <span className='nav195Title'>
            {'/>'}
          </span>
        </div>

        <div className="nav195Item nav195DesktopSection valign-wrapper">
          <span className="nav195Button cur-po">Home</span>
          <span className="nav195Button cur-po">Education</span>
          <span className="nav195Button cur-po">Experience</span>
          <span className="nav195Button cur-po">Projects</span>
          <span className="nav195Button cur-po">Contact Me</span>
        </div>

        <div className="nav195Item nav195MobileSection" onClick={alterDropdown}>
          <i className={dropdownActive ? "fa-solid fa-xmark nav195Icon" : "fa-solid fa-bars nav195Icon"}></i>
        </div>

      </div>
        {dropdownActive && (
          <div className='nav195Dropdown valigin-wrapper'>
            <span className="nav195Button cur-po">Home</span>
            <span className="nav195Button cur-po">Education</span>
            <span className="nav195Button cur-po">Experience</span>
            <span className="nav195Button cur-po">Projects</span>
            <span className="nav195Button cur-po">Contact Me</span>
          </div>
        )}
    </>
  )
}

export default Navbar;