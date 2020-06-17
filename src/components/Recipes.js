import React, { useState,useEffect } from 'react';
import API from './API'
import "./style/Recipes.scss"

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        API.getRecipes().then(recipes => //console.log(recipes)
             setRecipes(recipes)
        )
    },[])
 console.log(recipes)
    return <div>
        <h1>Recipes</h1>
        <button>Get Started</button>
        <ul className="recipes">
        {recipes.map(recipe => (
            <div className="recipe">
                <li key={recipe.id}>{recipe.title}</li>
                <li key={recipe.id}>{recipe.description}</li>
                <li key={recipe.id}>
                    <img src={`./burgers/${recipe.photo}`}></img>
                </li>
            </div>
        ))}
        </ul>
    </div>
}

export default Recipes;