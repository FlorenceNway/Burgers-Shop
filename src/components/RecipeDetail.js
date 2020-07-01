import React, { useState,useEffect } from 'react';
import API from './API';
import Ingredient from './Ingredient';
import SpecialOffer from './SpecialOffer';
import "./style/RecipeDetail.scss"

const RecipeDetail = ({match, order, setOrder}) => {
    
    const [recipe, setRecipe] = useState({})
    const id = match.params.id //id from the route url

    useEffect(() => {
        API.getRecipe(id).then(recipe => setRecipe(recipe))
    },[])


    const addToBasket = () => {
        setOrder({...order, id: id, qty: 1, recipe: recipe})
    }
    
    return  <div className="recipeDetail">
                <div className={'recipe'}>
                    <div className='detail'>
                        <div className="detailText">

                            <h3>{recipe.title}</h3>
                            <p className={'time'}><img src={require('../images/clock.svg')}></img>{recipe.time}</p>
                            <div>
                                <p><img src={require('../images/utensils.png')}></img>{recipe.serve}</p>
                                <p><img src={require('../images/calori.png')}></img>820 cals/serving</p>
                            </div>
                            <p>Plant-based burger, THIS Isn’t Bacon, vegan smoked gouda, shoestring fries, vegan bacon ketchup, chipotle ‘mayo’, spinach and pickles with rosemary salted chips</p>
                            <button onClick={addToBasket}>ADD TO BASKET</button>
                        </div>
                    </div>
                    <div className='photo'>
                        <img src={`../burgers/${recipe.photo}`}></img>
                    </div>
                </div>
                <Ingredient />
                <SpecialOffer />
            </div>
}

export default RecipeDetail;