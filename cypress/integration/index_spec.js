
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
    cy.get('#labelGoal1').contains('Acheezement 1')
    cy.get('#labelGoal2').contains('Acheezement 2')
    cy.get('#labelGoal3').contains('Acheezement 3')
    cy.get('#labelGoal4').contains('Acheezement 4')
  })

  it('allows user to input a goal', function() {
    cy.get('#inputGoal1').type('Meditate')
  })
})

describe('Submit Button', function() {
  it('only submits data to next page if all four fields have been filled', function() {
    cy.get('#submitGoals').click()
    cy.get('#inputGoal2').type('Drink 8 glasses of water')
    cy.get('#submitGoals').click()
    cy.get('#inputGoal3').type('Run 10K')
    cy.get('#submitGoals').click()
    cy.get('#inputGoal4').type('Write a journal')
    cy.get('#submitGoals').click()
    cy.get('body').contains("Today's Goals")
  })
})
