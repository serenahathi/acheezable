describe('Title', function() {
  it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000/acheezable/login')
    cy.get('title').contains('Login')
  })
})

describe('Header', function() {
  it('checks header is `Log In`', function() {
    cy.get('h1').contains('Log In')
  })
})