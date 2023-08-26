export {};

describe('service is available', () => {
  before(() => {
    cy.visit('/');
    cy.viewport(320, 480);
  });

  it('should be available on localhost:3000', () => {
    cy.visit('/');
    cy.contains('LinkedIn');
    cy.contains('GitHub');
    cy.contains('CV');
    cy.contains('Portfolio');
    cy.contains('E-mail');
  });
});
