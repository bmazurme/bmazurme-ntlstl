export {};

describe('service is available', () => {
  before(() => {
    cy.visit('/');
    cy.viewport(1800, 1200);
  });

  it('should be available on localhost:3000/profile', () => {
    cy.visit('/');
    cy.contains('LinkedIn');
    cy.contains('GitHub');
    cy.contains('CV');
    cy.contains('Portfolio');
    cy.contains('E-mail');
    cy.wait(1000);

    cy.contains('CV').click();
    cy.contains('ntlstl');

    cy.contains('RU').click();
    cy.contains('Богдан');
    cy.contains('Фронтенд-разработчик');
    cy.contains('Профессиональные навыки');
    cy.contains('Образование');
    cy.contains('Опыт работы');
    cy.wait(1000);

    cy.contains('EN').click();
    cy.contains('Bogdan');
    cy.contains('Frontend developer');
    cy.contains('Professional skills');
    cy.contains('Education');
    cy.contains('Work experience');
    cy.wait(1000);

    cy.contains('Telegram');
    cy.contains('LinkedIn');
    cy.contains('GitHub');
    cy.wait(1000);

    cy.contains('[ntlstl]').click();
    cy.wait(1000);

    cy.contains('Portfolio').click();
    cy.contains('RU').click();
    cy.contains('Портфолио');
    cy.wait(1000);

    cy.contains('EN').click();
    cy.contains('Portfolio');
    cy.wait(1000);

    cy.contains('[ntlstl]').click();

    cy.visit('http://localhost:3000/qwerty', { failOnStatusCode: false });
    cy.contains('404');
    cy.contains('Not found page.');
    cy.wait(1000);

    cy.contains('Go to main').click();
    cy.wait(1000);
  });
});
