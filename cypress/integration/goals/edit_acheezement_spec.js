describe('Editing a goal', function() {

  it('allows a user to edit a goal and view the newly edited goal', function() {
    cy.visit('http://localhost:3000')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('#login').click()
    cy.get('#inputGoal').type('Go for a walk')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click()
    cy.get('#pencil').click()
    cy.get('#inputGoal').clear()
    cy.get('#inputGoal').type('Go for a run')
    cy.get('#addGoal').click()
    cy.get('body').contains('Go for a run')
    cy.get('body').should('not.contain','Go for a walk')
  })
})


