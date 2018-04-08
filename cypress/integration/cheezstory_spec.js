describe('Cheezstory button', function() {
  it('redirects to the Cheezstory page', function() {
    cy.visit('http://localhost:3000')
    cy.get('#goalHistory').click()
    cy.get('h1').contains('Cheezstory')
  });
});

describe('The Cheezstory page', function() {
  it('has a link for each of the last 7 days', function() {
    cy.contains('Monday')
  });
});
