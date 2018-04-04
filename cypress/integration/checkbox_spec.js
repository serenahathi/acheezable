describe('Checkbox Page', function () {
  it('should display Acheezements title', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.title().should('include', 'Acheezements')
  })

  it('should display Acheezements header', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.contains('Acheezements')
  })

  it('should contain a checkbox', function () {
    cy.visit('http://localhost:3000/checkbox')
    cy.get('[type="checkbox"]').check()
  })
})
