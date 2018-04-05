
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
    cy.get('#labelGoalOne').contains('Acheezement 1')
    cy.get('#labelGoalTwo').contains('Acheezement 2')
    cy.get('#labelGoalThree').contains('Acheezement 3')
    cy.get('#labelGoalFour').contains('Acheezement 4')
  })

  it('allows user to input their goals', function() {
    cy.get('#inputGoalOne').type('Meditate')
    cy.get('#inputGoalTwo').type('Drink 8 glasses of water')
    cy.get('#inputGoalThree').type('Run 10K')

  })
})

describe('Submit Button', function() {
  it('only submits data to next page if all four fields have been filled', function() {
    cy.get('#submitGoals').click()
    cy.get('#inputGoalFour').type('Write a journal')
    cy.get('#submitGoals').click()
    cy.get('body').contains("Today's Goals")
  })
})
