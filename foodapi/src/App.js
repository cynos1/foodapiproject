import React, {useState} from 'react';
import './App.css';
import Axios from "axios";
import Showrecipe from './Showrecipe';


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
      <h1 className="header">Food recipe Plaza</h1>
      <form className="form" onSubmit={onSubmit}>
          <input className="input" type="text" placeholder="enter Ingredient" value ={query} onChange={(e)=> setquery(e.target.value)}/>
          <input type="submit" value="Search" className="search"/>

          {/* dropdown */}
          {/* <select className="app-healthlabels">
            <option onClick={()=> sethealthLabel("vegan")}>vegan</option>
            <option onClick={()=> sethealthLabel("vegetarian")}>vegetarian</option>
            <option onClick={()=> sethealthLabel("paleo")}>paleo</option>
            <option onClick={()=> sethealthLabel("dairy-free")}>dairy-free</option>
            <option onClick={()=> sethealthLabel("gluten-free")}>gluten-free</option>
            <option onClick={()=> sethealthLabel("wheat-free")}>wheat-free</option>
            <option onClick={()=> sethealthLabel("egg-free")}>egg-free</option>
            <option onClick={()=> sethealthLabel("low-sugar")}>low-sugar</option>

          </select> */}
      </form>
      <br/>
      <em className="center">Click on the images to view the recipes.</em>
      <div>
        {recipes.map((x)=>{
          return (
            // <div>
            //     <p>{x["recipe"]["label"]}</p>
            //     <img src={x["recipe"]["image"]} alt={x["recipe"]["label"]}/>
            // </div>
            //commented out to display the recipe in a different component
            <Showrecipe recipe = {x}/>
          )
          
        })}
      </div>
    </div>
    
  )
}

export default App;
