describe('completing a goal', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('#login').click()
  })

  it('checks title is `Acheezements`', function() {
    cy.get('#viewGoals').click()
    cy.get('title').contains('Acheezements')
  })

  // it('allows a user to mark a goal as complete', function() {
  //   cy.get('#mark-complete').click()
  //   cy.get('body').should('not.contain','Mark as complete')
  // })

  it('should display 0% when all goals are incomplete', function() {
    cy.get('#inputGoal').type('Meditate')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click()
    cy.get('#percentage').contains('0 %')
  })

  // ****************
  it('should display 100% when all goals are complete', function() {
    cy.get('#viewGoals').click()
    cy.get('#mark-complete').click()
    cy.get('.swal-button').contains('Success')
  })
  // ****************

  it('allows a user to receive a "motivation hit"', function() {
    cy.get('#motivation').click()
    cy.get('.swal-button').contains('Close')
  })

  it('allows a user to visit the home page', function() {
    cy.get('#home').click()
    cy.get('title').contains('Acheezable')
  })

  it('allows a user to log out', function() {
    cy.get('#logout').click()
    cy.get('title').contains('login')
  })

})
