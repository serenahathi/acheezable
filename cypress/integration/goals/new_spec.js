describe('Acheezements page', function() {

  before(function() {
    cy.visit('http://localhost:3000/acheezements')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('button').click()
  })

it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000/acheezements/new')
    cy.get('title').contains('Acheezable')
  })

  it('checks header is `Create Acheezements`', function() {
    cy.get('h1').contains('Create Acheezements')
  })
});

describe('Adding a new goal', function() {
  before(function() {
    cy.visit('http://localhost:3000/acheezements')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('button').click()
  })

  it('allows user to input and submit a goal', function() {
    cy.get('#inputGoal').type('Meditate')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click();
  })

  it('navigates to the View Acheezements page and see the newly entered goal', function() {
    cy.get('body').contains("Meditate")
  });
});
