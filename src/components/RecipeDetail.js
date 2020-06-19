import React, { useState,useEffect } from 'react';
import API from './API'
import "./style/Recipe.scss"

const RecipeDetail = ({match, setQtyCounter, qtyCounter, order, setOrder}) => {
    
    const [recipe, setRecipe] = useState({})
    const id = match.params.id

    useEffect(() => {
        API.getRecipe(id).then(recipe => setRecipe(recipe))
    },[])


    const addToBasket = () => {

        setQtyCounter(qtyCounter + 1)

        setOrder({...order, id: id, qty: 1, recipe: recipe})
    }
    
    return  <div className="recipeDetail">
            <div className={'recipe'}>
                <div className='detail'>
                    <h1>{recipe.title}</h1>
                     <button onClick={addToBasket}>ADD TO BASKET</button>
                </div>
                <div className='photo'>
                    <img src={`../burgers/${recipe.photo}`}></img>
                </div>
            </div>
            </div>
}

export default RecipeDetail;