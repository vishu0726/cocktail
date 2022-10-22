import React from 'react';
import "./Header.css";
// import headerImg from '../../Images/header.jpg';
import logo from '../../Images/logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock,faLocationDot} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='main'>
        <div className='header'>
        <div className='logo_details'>
            <div><img className='logo' src={logo}/></div>
            <div className='name_desc'>
                <div className='logo_name'>Cocktails</div>
                <div className='name'><FontAwesomeIcon icon={faLocationDot}/> 57,Virul Gaon Street,MH</div>
                <div className='status'>OPEN</div>
            </div>
        </div>
        {/* <div><img className='image' src={headerImg}/></div> */}
        <div className='time'><FontAwesomeIcon icon={faClock}/> 12:00AM - 11:59PM</div>
    </div>
    </div>
  )
}

export default Header