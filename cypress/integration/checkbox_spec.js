describe('Checkbox Page', function () {
  it('should display Acheezements title', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.title().should('include', 'Acheezements')
  })

  it('should display Acheezements header', function () {
    cy.contains('Acheezements')
  })

  it('should be possible to check boxes in any order', function () {
    cy.get('#checkbox1').check()
    cy.get('#checkbox4').check()
    cy.get('#checkbox2').check()
  })

  it('knows if a task is already completed', function() {
    cy.get('#checkbox3').should('be.checked')
  })

  it('should create a dialog box when all checkboxes are checked', function() {
    cy.get('[type="checkbox"]').check()
    cy.contains('Success!').should('be.visible')
  })
})
