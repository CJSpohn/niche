describe ('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should have a header', () => {
    cy.get('.header')
      .contains('Kitchen Sink')

    cy.get('h1')
      .get('p')
      .contains('Use it before you lose it')
  })
});
