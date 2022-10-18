describe('Main Page', () => {
  it('Load Page', () => {
    cy.visit('/');
    cy.title().should('eq', 'Doooolphin App !');
  });
});
