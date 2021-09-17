import React from 'react'

export default function Showrecipe({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&
        (
        <div className="showrecipe-display" onClick={()=> window.open(recipe["recipe"]["url"])}>
            <em>Click on the images to view the recipes.</em>
            <img src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} className="images"/>
            <p>{recipe["recipe"]["label"]}</p>
        </div>
        )
    )
}
