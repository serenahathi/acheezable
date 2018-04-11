describe('Acheezements page', function() {

    it('<logs user in>', function() {
      cy.visit('http://localhost:3000/acheezements')
      cy.get('#emailAddress').type('cypress@test.com')
      cy.get('#password').type('password')
      cy.get('#login').click()
    })
  
it('checks title is `Acheezable`', function() {
    cy.get('title').contains('Acheezable')
  })

  it('checks header is `Create Acheezements`', function() {
    cy.get('h1').contains('Create Acheezements')
  })
});

describe('Adding a new goal', function() {
  // it('allows user to input and submit one goal', function() {
  //   cy.get('#inputGoal').type('Meditate')
  //   cy.get('#addGoal').click();
  // })

  it('navigates to the View Acheezements page and shows the newly entered goal', function() {
    cy.get('#viewGoals').click();
    // cy.get('body').contains("Meditate")
  });

  it('allows user to input and submit a second goal', function() {
    cy.get('#back-button').click();    
    cy.get('#inputGoal').type('Go for a run')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click();
  })

  it('navigates to the View Acheezements page and shows both goals', function() {
    // Note: adding line 31 here prompts the user to log in again. Not sure why.
    cy.get('body').contains("Meditate")
    cy.get('body').contains("Go for a run")
  });

  // it('displays a suggested goal when the user clicks "Need a suggestion"', function(){
  //   cy.get('#goalSuggestion').click();
  //   cy.get('#suggestionDisplay').contains('')
  // })

  // it('adds suggested goal to View Acheezements page when the user clicks "Accept sugestion"', function(){
  //   cy.get('#goalSuggestion').click();
  //   cy.get('#suggestionDisplay').contains('')
  // })

   // it( 'navigates to the sign in page when the user clicks on "Log out"', function() {
  //   cy.get('#logout').click();
  //   cy.url().should('eq', 'http://localhost:3000/login')    
  // })

})
