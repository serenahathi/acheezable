describe('Acheezements page', function() {

  it('<logs user in>', function() {
    cy.visit('http://localhost:3000/acheezements')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('#login').click()
  })

  it('cheezstory test', function() {
    cy.get('#goalHistory').click()
    
  })

})
