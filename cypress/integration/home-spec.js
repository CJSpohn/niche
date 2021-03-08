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

  it('should return recipes based on ingredients', () => {
    cy.intercept(`https://api.spoonacular.com/**`,
      { fixture: 'results.json' })

    cy.get('form')
      .type('onions, broccoli')

    
  })
});
