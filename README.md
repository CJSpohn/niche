# Kitchen Sink
## A recipe app that allows you to search recipes by ingredients you have that you want to use up! Search for anything but the kitchen sink!
#### Turing School of Software Design - Mod3 Niche Audience Project

### Contributors

**Chris Spohn** : [github profile](https://github.com/CJSpohn)

### Technologies

**Build**: React.js, React Hooks, React Router

**Testing**: Cypress

**Deployment**: Heroku

## Table of Contents
1. [Introduction](#introduction)
3. [Instructions](#setup-instructions)
4. [How-To](#using-kitchen-sink)
5. [Future Plans](#notes-and-plans-for-future-iterations)

## Introduction
This app presents the user with an easy to use search to find recipes. Specifically, a user is able to search for ingredients they need to use. Maybe they want to use them up before they go bad. Maybe they are trying to use a special fancy ingredient to impress a certain someone. Ultimately, the goal of the app is to provide a user ingredient-specific recipes at a click. No more browsing through blog posts and scrolling for miles to get what you want to know. Kitchen Sink is about finding recipes fast. More details about the context for the project can be found in [this project spec](https://frontend.turing.io/projects/module-3/niche-audience.html).

## Setup Instructions
To run the project locally:
- [obtain a personal API key for Spoonful](https://spoonacular.com/food-api/console#Plan)
- `git clone` this repo
- `cd` into the niche repo
- run `npm install`
- add your keys to a .env file in the root folder of the repo following [these instructions](https://dev.to/ivana_croxcatto/hiding-api-keys-in-your-code-1h0a) and add the .env file to your .gitignore file so that your keys are never made publicly accessible. The GitHub key should be stored in the .env file as `REACT_APP_SPOON_KEY` e.g `REACT_APP_SPOON_KEY=a3113n1h23vg1v1`
- run `npm start` to run the React App in your browser

OR

This site is deployed using Heroku. To visit, click the link below!
- [Kitchen Sink](https://kitchensinkcjs.herokuapp.com/)


### Testing

Cypress was used to implement end-to-end-tests of the user flow. To run these tests, `cd` into the project repository and install Cypress by typing `npm i -D cypress` on the command line and adding 
```
"scripts": {
    "cypress:open": "cypress open"
  }
  ```
 to your `package.json` file.

 Then run `npm run cypress:open`

 Cypress.js should open a window with a list of test files. Click on app-spec.js to run the tests in that file.
 Note that the Cypress tests are built to run locally, so you must follow the instructions for setting up the project locally in order for the tests to pass.

[Back to Top of Page](#table-of-contents)

---

## Using Kitchen Sink

First, enter the ingredients you would like to use in the search bar and click the button!
<img width="930" alt="Screen Shot 2021-03-08 at 4 41 02 PM" src="https://user-images.githubusercontent.com/69563078/110396451-4685f580-802d-11eb-85f0-43764874b3af.png">

Recipe cards that contain your ingredients are generated, including how many more ingredients you will need to make the recipe.
<img width="632" alt="Screen Shot 2021-03-08 at 4 41 18 PM" src="https://user-images.githubusercontent.com/69563078/110396458-484fb900-802d-11eb-91d5-e3ff3a15211f.png">

A user can click the "recipe" button to see a list of ingredients for the recipe...
<img width="629" alt="Screen Shot 2021-03-08 at 4 41 34 PM" src="https://user-images.githubusercontent.com/69563078/110396453-47b72280-802d-11eb-9621-7a93b8bbd3b8.png">

...and instructions.
<img width="663" alt="Screen Shot 2021-03-08 at 4 41 43 PM" src="https://user-images.githubusercontent.com/69563078/110396445-44bc3200-802d-11eb-96de-f8b0f54cea9d.png">

Additionally, a user can favorite a recipe to save it while they search for other ideas. You can come back and revisit that recipe's details at any time!
<img width="310" alt="Screen Shot 2021-03-08 at 4 41 57 PM" src="https://user-images.githubusercontent.com/69563078/110396450-4685f580-802d-11eb-856a-a7cb1c7db9bd.png">

The site does not make use of local storage so there is no data persistance. If you navigate away from the page your favorites will disappear!


[Back to Top of Page](#table-of-contents)

---

### Wins
- **Time Frame:** The biggest win of this project is that it was built and tested over 4 days. Additionally, it was relatively easy stubbing and intercepting the fetch requests in Cypress. 
- **Simplicity:** I like that the app more or less achieves what I set out to do. Recipes within a few clicks. I'm continually frustrated by trying to navigate rows and rows of over explanation that recipe sites use for SEO or whatever other reason. I'm happy to have something that consolidates everything so neatly. 

### Notes and Plans for Future Iterations
- **Detailed Search:** The Spoonacular API allows for so many more query parameters. Future iterations of this site would include more options to narrow a search, such as specific ingredients to avoid or a type of dish to look for. 
- **Nutrition Information:** Another goal would be to include nutritional information for each recipe. These also are provided by the Spoonacular API but left out due to time contraints. 
- **Styling:** I would love to spend more time making the UI of this site a little cleaner. It felt a little haphazardly thrown together. I had a clear plan for creating a site based on my wireframes and I'm please with the positioning of the site, but the actual color scheme and styling feels like it could use some improvement. 


[Back to Top of Page](#table-of-contents)


