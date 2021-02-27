# Burgers Booking App

###### Design link

<hr>
https://www.figma.com/file/VQz2NrvK8lPykD91kedoKJ/e-commerce_2?node-id=43%3A2
<hr>

This is a burger shop app to choose the burgers, check the product details, review and update in checkout, and order the burger by filing the customer details form.

#### Tech Stack

- React Hooks

### To run, open 2 terminals:

- npm start
- json-server -p 3001 db.json

### Features

1. React Router is used to navigate between pages.
2. Mock Database is used to fetch recipes and store orders.
3. Main Page

   - when click on `Get started` it navigate to receipes page.

4. PLP - Product listing page - 2nd page

   - when click on `Get started` it scrolls to list section.
   - On PLP when user click `See more` it renders 1 extra row of items.
   - when click on item it navigate to PDP.
     -it will stay on the same url but change a component

5. PDP - product details page -3rd page

   - when user click on `Add to basket` it will add item to basket
   - basket icon will be updated
   - if user add the same product to basket it will increase quantity rather than render it as a separate.

6. Basket
   - user can update quantity for each item
   - user can remove item from the basket
   - when user filled up the order form and click submit, the order will be stored in database with customer details and ordered items.
   - in the same time, a customer will be added to `customers` list in DB for future mail campaigns.
     it won't add a customer twice by checking the unique email.
