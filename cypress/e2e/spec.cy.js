describe('Main Page', () => {
  it('Load Page', () => {
    cy.visit('/', { timeout: 120000 });
    cy.title().should('eq', 'Doooolphin App !');
  });
});
