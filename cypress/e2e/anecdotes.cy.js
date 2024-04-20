describe('Anecdotes', function() {
  it('list is shown', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Anecdotes')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000) 
    cy.contains('Premature optimization is the root of all evil.')
  })
})