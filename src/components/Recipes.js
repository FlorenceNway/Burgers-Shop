import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import clock from "../images/clock.svg"
import Cover from './Cover';
import API from './API'
import "./style/Recipes.scss"

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        API.getRecipes().then(recipes => setRecipes(recipes))
    },[])

    return  <div className="recipesPage">
                <Cover />
                <section className="text">
                    <div>
                        <h1>Explore our Menus</h1>
                        <p>Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW Approved, Diabetes Friendly recipes and health-conscious offerings.</p>
                    </div> 
                </section>
                
                <ul className="recipes">
                {recipes.map(recipe => (
                    <Link to={`/recipes/${recipe.id}`}>
                        <div className="recipe">
                             <li key={recipe.photo} className="recipePhoto">
                                <img src={`./burgers/${recipe.photo}`}></img>
                            </li>
                            <li key={recipe.title}>{recipe.title}</li>
                            <li key={recipe.id}>{recipe.description}</li>
                            <li><img src={clock}></img><span>{recipe.time}</span></li>
                        </div>
                    </Link>
                    
                ))}
                </ul>
            </div>
}

export default Recipes;