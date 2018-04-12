describe('Acheezements page', function() {

  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('#emailAddress').type('cheezers@hallou.mi')
    cy.get('#password').type('halloumi')
    cy.get('#login').click()
    cy.get('#goalHistory').click()
  })

  it('checks title is Cheezetory', function() {
    cy.get('title').contains('Cheezetory')
  })

  it('displays the last week', function() {
    cy.get('body').contains('Today you completed 0%')
    cy.get('body').contains('On Wednesday you completed 100%')
    cy.get('body').contains('On Tuesday you completed 100%')
    cy.get('body').contains('On Monday you did not create any goals')
    cy.get('body').contains('On Sunday you did not create any goals')
    cy.get('body').contains('On Saturday you did not create any goals')
    cy.get('body').contains('On Friday you did not create any goals')
  })

  it('displays the goals set on each day', function() {
    cy.get('.days').click({ multiple: true })
    cy.get('body').contains('true')
  })

})
