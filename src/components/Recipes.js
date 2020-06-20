import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';
import API from './API'
import "./style/Recipes.scss"
import ExploreMenu from './ExploreMenu';

const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    const [number, setNumber] = useState(6)

    useEffect(() => {
        API.getRecipes(number).then(moreRecipes => setRecipes([...recipes,...moreRecipes]))
    },[])

    const seeMore = () => {
        setNumber(number + 3)
        API.getRecipes(number + 3).then(recipes => setRecipes(recipes))
    }

    return  <div className="recipesPage">
                <Cover scroll/>
                <ExploreMenu/>
                
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
                <button className="seemore" onClick={seeMore}>SEE MORE</button>
            </div>
}

export default Recipes;