describe('Title', function() {
  it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000')

    cy.get('title').contains('Acheezable')
  })
})

describe('Header', function() {
  it('checks header is `Acheezable`', function() {
    cy.visit('http://localhost:3000')

    cy.get('h1').contains('Acheezable')
  })
})
