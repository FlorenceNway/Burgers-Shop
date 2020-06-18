const baseURL = "http://localhost:3001"
    
const getRecipes = () => fetch(`${baseURL}/Recipes`).then(recipe => recipe.json());

const getRecipe = (id) => fetch(`${baseURL}/Recipes/${id}`).then(recipe => recipe.json());

const postCustomer = (customer) =>  fetch(baseURL, {
                                            method: "POST",
                                            headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            },
                                        body: JSON.stringify(customer),
                                    }).then((res) => res.json());

const patchOrder = (id,order) => fetch(`${baseURL}/${id}`, {
                                            method: "PATCH",
                                            headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            },
                                        body: JSON.stringify(order),
                                    }).then((res) => res.json());
 
export default {
    getRecipes,
    getRecipe,
    postCustomer,
    patchOrder
}