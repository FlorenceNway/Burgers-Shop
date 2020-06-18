const baseURL = "http://localhost:3001"
    
const getRecipes = () => fetch(`${baseURL}/Recipes`).then(recipe => recipe.json());
const getRecipe = (id) => fetch(`${baseURL}/Recipes/${id}`).then(recipe => recipe.json());
 
export default {
    getRecipes,
    getRecipe
}