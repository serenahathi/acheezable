describe('Title', function() {
  it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000/acheezements')
    cy.get('title').contains('Login')
  })
})

describe('Header', function() {
  it('checks header is `Log In`', function() {
    cy.get('h1').contains('Log In')
  })
})

describe('Sign up', function() {
  it('lets a user sign up', function() {
    cy.get('a').click()
    cy.get('h1').contains('Sign Up')
  })

  it('lets a user enter an email and password', function() {
    cy.get('#emailAddress').type('john@hello.me')
    cy.get('#password').type('hellome')
  })

  it('tells a user if they already have an account', function() {
    cy.get('button').click()
    cy.get('.alert').contains('That email is already taken.')
  })

  it('lets a user return to the Log in page', function() {
    cy.get('a').click()
    cy.url().should('eq', 'http://localhost:3000/login')
  })
})

describe('Log in', function() {
  it('lets a user enter an email and password', function() {
    cy.get('#emailAddress').type('gianfranco@hello.me')
    cy.get('#password').type('hellome')
  })

  it('tells the user if the details are incorrect', function() {
    cy.get('button').click()
    cy.get('.alert').contains('No user found.')
  })

  it('lets a user log in with the correct details', function() {
    cy.get('#emailAddress').type('john@hello.me')
    cy.get('#password').type('hellome')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/acheezements/new')
  })

  it
})
