import React, {useState} from 'react';
import './App.css';
import Axios from "axios";
import Showrecipe from './Showrecipe';
import {FaSearch} from 'react-icons/fa'

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);//saves the data gotten by axios here
  const [healthLabel] = useState("vegan");
  const url = `https://api.edamam.com/search?q=${query}&app_id=afcb8dcf&app_key=61fbfa8fb688e3313de3c286808803e6&
  &&health=${healthLabel}`;

  async function getRecipes(){ //axios will help get the data from url
    var result = await Axios.get(url);
    setrecipes(result.data.hits); //hits is an array of object in the url
    console.log(result.data)
  }
  
  

  const onSubmit = (e) =>{ //prevents page reload each time we click the submit button
    e.preventDefault();
    getRecipes();
  }

  return (
    
    <div className="app">
      
      <form className="form" onSubmit={onSubmit}>
      <h1 className="header">Food recipes</h1>
          <input className="input" type="text" value ={query} onChange={(e)=> setquery(e.target.value)}/>
          <FaSearch className="icon"/>
          <input type="submit" value="Enter" className="search"/>
        <hr/>
        <br/>
          <div className="row">
        {recipes.map((x)=>{
          return (
            <Showrecipe recipe = {x}/>
          )
          
        })}
      </div>
      </form>
      <br/>
     
     
    </div>
    
  )
}

export default App;
