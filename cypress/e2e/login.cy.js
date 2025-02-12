describe('template spec', () => {
  const base_url = "https://the-internet.herokuapp.com/login";
  
  it('Login & Logout', () => {
    cy.visit(base_url);
    // Validate on Login Page
    cy.wait(5000);
    cy.contains('Login Page');

    // Login 
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    // Validate Succeess Login
    cy.wait(5000);
    cy.contains('Secure Area');

    // Logout
    cy.get('.button').click();
  })
})