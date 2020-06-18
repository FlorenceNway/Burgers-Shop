import React, { useState,useEffect } from 'react';
import API from './API'
import "./style/Recipes.scss"

const RecipeDetail = ({match}) => {
    
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        API.getRecipe(match.params.id).then(recipe => setRecipe(recipe))
        console.log(recipe)
    },[])

    return  <div>
                <h1>{recipe.title}</h1>
            </div>
}

export default RecipeDetail;