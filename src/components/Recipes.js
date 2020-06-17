import React, { useState,useEffect } from 'react';
import API from './API'
import burger from '../images/burgers/burger1.png'

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
        {recipes.map(recipe => (
            <ul>
                <li>{recipe.title}</li>
                <li>{recipe.description}</li>
                <li>
                    <img src={`/src/images/burgers/burger1.png`}></img>
                </li>
            </ul>
        ))}
    </div>
}

export default Recipes;