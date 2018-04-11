describe('completing a goal', function() {

  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('#login').click()
    cy.get('#inputGoal').type('Meditate')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click()
  })

  it('checks title is `Acheezements`', function() {
    cy.get('title').contains('Acheezements')
  })

  it('allows a user to mark a goal as complete', function() {
    cy.get('#mark-complete').click()
    cy.get('body').should('not.contain','Mark as complete')
  })

})
