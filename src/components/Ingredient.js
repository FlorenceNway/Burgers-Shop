import React from 'react';
import "./style/RecipeDetail.scss"

const Ingredient = () => {
    return <div className="ingredients">
            <div>
                <div className="header">
                    <p>fresh</p>
                    <p>ingredient</p>
                </div>
                <div className="list">
                <ul className="measure">
                    <li>10 oz</li>
                    <li>2</li>
                    <li>%lb</li>
                    <li>10 oz</li>
                    <li>2</li>
                    <li>%lb</li>
                    <li>10 oz</li>
                    <li>1 Tbsp</li>
                    <li>1 Tbsp</li>
                </ul>
                <ul className="ingredient">
                    <li>Ground Beef</li>
                    <li>Potato Buns</li>
                    <li>Broccoli</li>
                    <li>Garlic</li>
                    <li>Hoisin Sauce</li>
                    <li>Potato Buns</li>
                    <li>Mayonnaise</li>
                    <li>White Wine Vinegar</li>
                    <li>Black & White Sesame Seeds</li>
                </ul>
                </div>
            </div>
        </div>
}

export default Ingredient;