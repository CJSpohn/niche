describe ('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should have a header', () => {
    cy.get('header')
      .contains('Kitchen Sink')

    cy.get('h1')
      .get('p')
      .contains('Use it before you lose it')
  })

  it('should have a current highlights section', () => {
    cy.get('.aside')
      .contains('Current Highlights')
  })

  it('the highlights should show that nothing is there initially', () => {
    cy.get('.aside')
      .get('p')
      .contains('You haven\'t favorited anything yet')
  })

  it('should contain instructions', () => {
    cy.get('.recipes')
      .get('h1')
      .contains('What ingredients do you need to use?')
  })

  it('should have a form input and a button', () => {
    cy.get('form')
      .should('exist')

    cy.get('button')
      .should('exist')
  })
});

describe('looking up recipes', () => {
  beforeEach(() => {
      cy.intercept(`https://api.spoonacular.com/**`, { fixture: 'results.json', status: 200 })
  })

  it('should return recipes based on ingredients', () => {
    cy.get('input')
    .type('onions, broccoli')

    cy.get('button')
      .click()

    cy.get('.card-grid')
      .children()
      .should('have.length', 2)
  })

  it('should have the right title on each card', () => {
    cy.get('.card-grid')
      .children('article:first')
      .get('h4')
      .contains('Whole Chicken Dinner')

    cy.get('.card-grid')
      .children('article:nth-child(2)')
      .get('h4')
      .contains('Thai Pasta Salad')
  })

  it('each card should have an img', () => {
    cy.get('.card-grid')
      .children('article:first')
      .find('img')
      .should('exist')

    cy.get('.card-grid')
      .children('article:nth-child(2)')
      .find('img')
      .should('exist')
  })

  it('should be able to add a card to favorites by clicking the fav buton', () => {
    cy.get('.card-grid')
      .children('article:first')
      .find('.fav-btn')
      .click();

    cy.get('.aside-title')
      .contains('Whole Chicken Dinner')
  })

  it('should be able to remove a favorite from the highlights', () => {
    cy.get('.fav-aside-div')
      .find('.remove-btn')
      .click()

    cy.get('.aside')
      .get('p')
      .contains('You haven\'t favorited anything yet')
  })
});

describe('failed api request', () => {
  it('should show an error message if a fetch fails', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', `https://api.spoonacular.com/**`, {statusCode: 400})
    cy.get('button').click()

    cy.get('.error-message')
    .should('exist')
  })
});

describe('a reattempt to search', () => {
  it('should hide the error message after a successful reattempt to search', () => {
    cy.visit('http://localhost:3000')
    cy.intercept(`https://api.spoonacular.com/**`, { fixture: 'results.json', status: 200 })

    cy.get('input')
    .type('onions, broccoli')

    cy.get('button')
      .click()

    cy.get('.card-grid')
      .children()
      .should('have.length', 2)

    cy.get('.error-message')
      .should('not.exist')
  })
})

describe('the recipe page', () => {
  it('should be able to click on a recipe to view details', () => {
    cy.visit('http://localhost:3000')
    cy.intercept(`https://api.spoonacular.com/**`, { fixture: 'results.json', status: 200 })

    cy.get('input')
    .type('onions, broccoli')

    cy.get('button')
      .click()

    cy.get('.card-grid')
      .children('article:first')
      .find('a')
      .click();

    cy.get('h2')
      .contains('Ingredients')

    cy.get('h2').eq(1)
      .contains('Instructions')
  })

  it('should have the title of the recipe and it\'s image', () => {
    cy.get('h1')
      .contains('Whole Chicken Dinner')

    cy.get('img')
      .should('exist')
  })

  it('should have a lost for ingredients and instructions', () => {
    cy.get('ul').eq(0)
      .children()
      .should('have.length', 17)

    cy.get('ul').eq(1)
      .children()
      .should('have.length', 15)
  })

  it('should be able to go back to the main display and have original search results', () => {
    cy.get('button')
      .click();

    cy.get('.card-grid')
      .children()
      .should('have.length', 2)
  })

  it('should be able to navigate to the recipe from the favorites', () => {
    cy.get('.card-grid')
      .children('article:first')
      .find('.fav-btn')
      .click();

    cy.get('.fav-aside-div')
      .find('.view-btn')
      .click()

    cy.get('h1')
      .contains('Whole Chicken Dinner')

    cy.get('img')
      .should('exist')

    cy.get('h2')
      .contains('Ingredients')

    cy.get('h2').eq(1)
      .contains('Instructions')
  })
})

describe('a direct link', () => {
  it('should be able to navigate straight to a saved url', () => {
    cy.intercept(`https://api.spoonacular.com/**`, { fixture: 'individualResult.json', status: 200 })
    cy.visit('http://localhost:3000/recipes/Cauliflower,%20Brown%20Rice,%20and%20Vegetable%20Fried%20Rice/716426')

    cy.get('h1')
      .contains('Cauliflower, Brown Rice, and Vegetable Fried Rice')

    cy.get('img')
      .should('exist')

    cy.get('h2')
      .contains('Ingredients')

    cy.get('h2').eq(1)
      .contains('Instructions')
  })

  it('should be able to navigate to home from a direct link', () => {
    cy.get('button').click()

    cy.get('h1')
      .contains('What ingredients do you need to use?')
  })
})

describe.only('a 404 page', () => {
  it('should render a 404 page for a nonexistant url', () => {
    cy.visit('http://localhost:3000/fakeurl')

    cy.get('h2')
      .contains('There is nothing here')
  })
})
