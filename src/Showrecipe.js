import React from 'react'

export default function Showrecipe({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&
        (
        <div className="showrecipe-display" onClick={()=> window.open(recipe["recipe"]["url"])}>
            <img src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]}/>
            <p>{recipe["recipe"]["label"]}</p>
        </div>
        )
    )
}
