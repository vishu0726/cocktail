import React from 'react';
import Details from './Details/Details';
import Menu from './Menu/Menu';
import "./Main.css";


function Main() {
  return (
    <div className='main_page'>
        <Menu/>
        <Details/>
    </div>
  )
}

export default Main