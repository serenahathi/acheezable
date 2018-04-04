
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
  })

  it('allows user to input an option for their goal', function() {
    cy.get('#inputGoalOne').type('Run 10K')
  })
})

describe('Submit Button', function() {
  it('only submits data to next page if all four fields have been filled', function() {
    cy.get('#inputGoalTwo').type('Meditate')
    cy.get('#inputGoalThree').type('Pay someone a compliment')
    cy.get('#inputGoalFour').type('Write a poem')
    cy.get('#submitGoals').click()
    cy.get('body').contains("Today's Goals")
  })
})
