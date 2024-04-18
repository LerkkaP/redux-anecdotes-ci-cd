describe('Anecdotes', function() {
  it('list is shown', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Premature optimization is the root of all evil.')
  })
})