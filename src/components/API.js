const baseURL = "http://localhost:3001";

const getRecipes = (number) =>
  fetch(`${baseURL}/Recipes?_page=1&_limit=${number}`).then((recipe) =>
    recipe.json()
  );

const getRecipe = (id) =>
  fetch(`${baseURL}/Recipes/${id}`).then((recipe) => recipe.json());
const getCustomers = () =>
  fetch(`${baseURL}/Customers`).then((customers) => customers.json());

const postCustomer = (customer) =>
  fetch(`${baseURL}/customers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());

const postOrder = (order) =>
  fetch(`${baseURL}/orders`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Oops we couldn't post that!";
      }
    })
    .catch((error) => error);

const patchOrder = (id, order) =>
  fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  }).then((res) => res.json());

export default {
  getRecipes,
  getCustomers,
  getRecipe,
  postCustomer,
  postOrder,
  patchOrder,
};
