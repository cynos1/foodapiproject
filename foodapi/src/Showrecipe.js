import React from 'react'

export default function Showrecipe({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&
        (
        <div className="showrecipe-display" onClick={()=> window.open(recipe["recipe"]["url"])}> 
        {/* when the images are clicked then the full recipe opens up */}
            <div className="column">
            <img src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} className="images"/>
            <p>{recipe["recipe"]["label"]}</p>
            </div>
        </div>
        )
    )
}
