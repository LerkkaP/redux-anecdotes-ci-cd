describe('Anecdotes', function() {
  it('list is shown', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Anecdotes')
    cy.contains('Adding manpower to a late software project makes it later!')
  })
})