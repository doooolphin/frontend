describe('Main Page', () => {
  it('Load Page', () => {
    cy.visit('/', { timeout: 30000 });
    cy.title().should('eq', 'Doooolphin App !');
  });
});
