import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                             <li className="recipePhoto" key={recipe.photo} >
                                <img src={require(`../images/burgers/${recipe.photo}`)}></img>
                            </li>
                            <li className="title" key={recipe.title} >{recipe.title}</li>
                            <li className="description" key={recipe.id}>{recipe.description}</li>
                            <li className="time"><img src={require('../images/clock.svg')}></img><span>{recipe.time}</span></li>
                        </div>
                    </Link>
                ))}
                </ul>
                <button className="seemore">SEE MORE</button>
            </div>
}

export default Recipes;