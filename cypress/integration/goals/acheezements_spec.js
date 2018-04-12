describe('completing a goal', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('#login').click()
  })

  it('checks that the page title is `Acheezements`', function() {
    cy.get('#viewGoals').click()
    cy.get('title').contains('Acheezements')
  })

  // it('allows a user to mark a goal as complete', function() {
  //   cy.get('#mark-complete').click()
  //   cy.get('body').should('not.contain','Mark as complete')
  // })

  it('allows a user to receive a "motivation hit"', function() {
    cy.get('#viewGoals').click()
    cy.get('#motivation').click()
    cy.get('.swal-button').contains('Close')
  })

  it('should display a 0% rate when all goals are incomplete', function() {
    cy.get('#inputGoal').type('Meditate')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click()
    cy.get('#percentage').contains('0 %')
  })

  it('navigates to the edit page when the pencil icon is clicked', function() {
    cy.get('#viewGoals').click()
    cy.get('#pencil').click()
    cy.get('title').contains('Edit Acheezement')
  })

  it('should display a 100% completion rate when all goals are complete', function() {
    cy.get('#viewGoals').click()
    cy.get('.goal-incomplete').click({ multiple: true })
    cy.get('.swal-title').contains('Success!')
    cy.get('.swal-button').click()
  })

  it('allows a user to visit the home page', function() {
    cy.get('#home').click({ force: true })
    cy.get('title').contains('Acheezable')
  })

  it('allows a user to log out', function() {
    cy.get('#logout').click({ force: true })
    cy.get('title').contains('Login')
  })
})
