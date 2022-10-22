import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import "./Details.css";

function Details() {
  const [show,setShow] = useState(false);
  const [data,setData] = useState([]);
  const [input, setInput] = useState('');

   const fetchData = async () => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
    setData(response.data.drinks);
    console.log(response.data);
}


useEffect(() => {
  fetchData();
},[])

  return (
    <div className='details'>
      <input className='input_feild' placeholder='search your favorite drink...' type="text" onChange={e => setInput(e.target.value)} /><FontAwesomeIcon className='search_btn' icon={faSearch}/>
   { !input ? <div>{data.map(ele => {
      return (
        <div className='cocktail_details' key={ele.idDrink}>
          <img className='details_image' onClick={() => setShow(!show)} src={ele.strDrinkThumb} alt=""/>
          <div className='cocktail_name'>{ele.strDrink}</div>
          <div>
            {show &&
              <div>
                <div>
                  <span className='ingredient'>Ingredients: </span>
                  <span className='para'>{ele.strIngredient1},{ele.strIngredient2},{ele.strIngredient3},{ele.strIngredient4}</span>
                </div>
                <div>
                  <span className='ingredient'>Process to make: </span>
                  <span className='para'>{ele.strInstructions}</span>
                </div>
              </div>
            }
          </div>
        </div>
      )
    })}</div>  : <div>{data.filter(ele => ele.strDrink.match(new RegExp(input,"i"))).map(ele => {
      return (
        <div className='cocktail_details' key={ele.idDrink}>
          <img className='details_image' onClick={() => setShow(!show)} src={ele.strDrinkThumb} alt=""/>
          <div className='cocktail_name'>{ele.strDrink}</div>
          <div>
            {show &&
              <div>
                <div>
                {/* <div>{ele.strGlass}</div> */}
                  <span className='ingredient'>Ingredients: </span>
                  <span className='para'>{ele.strIngredient1},{ele.strIngredient2},{ele.strIngredient3},{ele.strIngredient4}</span>
                </div>
                <div>
                  <span className='ingredient'>Process to make: </span>
                  <span className='para'>{ele.strInstructions}</span>
                </div>
              </div>
            }
          </div>
        </div>
      )
    })}</div>}
    
    </div>
  )
}

export default Details