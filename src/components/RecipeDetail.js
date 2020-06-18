import React, { useState,useEffect } from 'react';
import API from './API'
import "./style/Recipes.scss"

const RecipeDetail = ({match, setQtyCounter, qtyCounter}) => {
    
    const [recipe, setRecipe] = useState({})
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState({
            "quantity": 0,
            "product_id": null
    })
    
    const id = match.params.id

    useEffect(() => {
        API.getRecipe(id).then(recipe => setRecipe(recipe))
    },[])

    const addToBasket = () => {
        setQtyCounter(qtyCounter + 1)
        setOrder({quantity:qtyCounter,product_id:id})

        const localOrders = [...orders]
        const itemIndex = localOrders.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
        localOrders[itemIndex].quantity += qtyCounter;
        } else {
        localOrders.push({order});
        }

        
        setOrders(localOrders)

        console.log(orders)
    }

    return  <div>
                <h1>{recipe.title}</h1>
                <button onClick={addToBasket}>ADD TO BASKET</button>
            </div>
}

export default RecipeDetail;