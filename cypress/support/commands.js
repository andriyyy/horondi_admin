Cypress.Commands.add('login', (email, password) => {
  const query = `
        mutation{
            loginAdmin(loginInput: {
                email: "${email}",
                password: "${password}"
            }){
                token
            }
        }
    `;

  cy.request({
    method: 'POST',
    url: Cypress.env('SERVER_URL'),
    body: {
      query
    }
  })
    .then((res) => res.body.data.loginAdmin.token)
    .then((token) => {
      const data = { HORONDI_AUTH_TOKEN: token };
      window.localStorage.setItem('horondiAdmin', JSON.stringify(data));
      return token;
    });
});
