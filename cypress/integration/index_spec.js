
describe('Title', function() {
  it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000')
    cy.get('title').contains('Acheezable')
  })
})

describe('Header', function() {
  it('checks header is `Acheezable`', function() {
    cy.get('h1').contains('Acheezable')
  })
})

describe('Input options', function() {
  it('labels each input box numerically', function() {
    cy.get('#labelGoal').contains('Acheezement')

  })

  it('allows user to input a goal', function() {
    cy.get('#inputGoal').type('Meditate')
  })
})

describe('Submit Cheeze', function() {
  it('saves a set of goals and takes the use to the cheeze show page', function() {
    cy.get('#submitCheeze').click();
    cy.get('body').contains("Today's Goals")
  });
});

// describe('Submit Button', function() {
//   it('only submits data to next page if all four fields have been filled', function() {
//     cy.get('#submitGoals').click()
//     cy.get('#inputGoal2').type('Drink 8 glasses of water')
//     cy.get('#submitGoals').click()
//     cy.get('#inputGoal3').type('Run 10K')
//     cy.get('#submitGoals').click()
//     cy.get('#inputGoal4').type('Write a journal')
//     cy.get('#submitGoals').click()
//     cy.get('body').contains("Today's Goals")
//   })
// })
