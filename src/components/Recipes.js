import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from './API'
import "./style/Recipes.scss"

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        API.getRecipes().then(recipes => setRecipes(recipes))
    },[])

    return  <div>
                <h1>Recipes</h1>
                <button>Get Started</button>
                <ul className="recipes">
                {recipes.map(recipe => (
                    <Link to={`/recipes/${recipe.id}`}>
                        <div className="recipe">
                            <li key={recipe.title}>{recipe.title}</li>
                            <li key={recipe.id}>{recipe.description}</li>
                            <li key={recipe.photo}>
                                <img src={`./burgers/${recipe.photo}`}></img>
                            </li>
                        </div>
                    </Link>
                    
                ))}
                </ul>
            </div>
}

export default Recipes;