
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
  it('allows user to input an option for their goal', function() {
    cy.get('input').type('Run 10K')
  })

  it('renders text for each acheezement', function() {
    cy.get('#goal-1').contains('Acheezement 1')
  })
})

describe('Submit Button', function() {
  it('takes you to`Acheezements` page', function() {
    cy.get('#submit-goals').click()
    cy.get('body').contains('Acheezements')
  })
})
