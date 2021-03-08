describe('failed api request', () => {
  it('should show an error message if a fetch fails', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', `https://api.spoonacular.com/**`, (req) => {
      req.reply({ status: 404, fixtures: null })
    })
    cy.get('button').click()
  })
})
