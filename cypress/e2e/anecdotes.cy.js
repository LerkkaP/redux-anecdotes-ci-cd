describe('Anecdotes', function() {
  it('list is shown', function() {
    cy.visit('http://localhost:5000')
    cy.get('body').should('contain', 'Premature optimization is the root of all evil.')
    //cy.contains('Premature optimization is the root of all evil.')
  })
})