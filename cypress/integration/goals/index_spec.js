describe('Acheezements Page', function () {
  it('should display Acheezements header', function () {
    cy.visit('http://localhost:3000/acheezements')
    cy.contains('Acheezements')
  })

  it('should be possible to complete an acheezement via button', function () {
    cy.get('#goal1').click();
  })
})
