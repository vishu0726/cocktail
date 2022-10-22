import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Menu.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const [data1,setData1] = useState([]);
    // const [data2,setData2] = useState([]);
    // const [data3,setData3] = useState([]);

    const fetchData = async () => {
        const response1 =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
        setData1(response1.data.drinks);
        console.log(response1.data);
    }
    // const fetchData1 = async () => {
    //     const response2 =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
    //     setData2(response2.data.drinks);
    //     console.log(response2.data);
    // }
    // const fetchData2 = async () => {
    //     const response3 =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`);
    //     setData3(response3.data.ingredients);
    //     console.log(response3.data)
    // }
    // console.log(data3);
    useEffect(() => {
        fetchData();
        // fetchData1();
        // fetchData2();
    },[])
  return (
    <div className='menu'>
        <h1 className='heading_drink'>DRINKS</h1>
        {data1.map(ele => {
            return (
                <ul className='list' key={ele.isDrink}>
                    <li className='drink_name'>{ele.strDrink}
                    <FontAwesomeIcon className='arrow' icon={faArrowRight}/>
                    </li>
                </ul>
            )
        })}
    </div>
  )
}

export default Menu