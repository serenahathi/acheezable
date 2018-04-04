describe('Checkbox Page', function () {
  it('should display Acheezements title', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.title().should('include', 'Acheezements')
  })

  it('should display Acheezements header', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.contains('Acheezements')
  })

  it('should contain first checkbox', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.get('#checkbox1').check()
  })

  it('should contain second checkbox', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.get('#checkbox2').check()
  })

  it('should contain third checkbox', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.get('#checkbox3').check()
  })

  it('should contain fourth checkbox', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.get('#checkbox4').check()
  })

  it('should create a dialog box when all checkboxes are checked', function() {
    cy.visit('http://localhost:3000/checkbox')
    cy.get('[type="checkbox"]').check()
    cy.contains('Success!').should('be.visible')
  })
})
