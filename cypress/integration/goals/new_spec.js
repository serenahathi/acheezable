describe('Create Acheezements Page', function() {
  it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000/acheezements/new')
    cy.get('title').contains('Acheezable')
  })

  it('checks header is `Create Acheezements`', function() {
    cy.get('h1').contains('Create Acheezements')
  })

  it('allows user to input a goal', function() {
    cy.get('#inputGoal').type('Meditate')
  })

  it('takes the user to `Today\'s Acheezements` via submit button', function() {
    cy.get('#viewGoals').click();
    cy.get('body').contains("Today's Acheezements")
  });
});
