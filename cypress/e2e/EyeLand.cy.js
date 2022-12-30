describe('EyeLand', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/EyeLand/#')
  })

  it('frontpage can be opened', () => {
    cy.contains('EYELAND')
  })

  it('Teachers login can be opened', () => {
    cy.get(':nth-child(2) > .button').click()
    cy.contains('Iniciar sesión')
  })

  it('Teacher can login', () => {
    cy.get(':nth-child(2) > .button').click()
    cy.get('#login-teacher-form-username').type('admin ')
    cy.get('#login-teacher-form-password').type('admin')
    cy.get('.button').click()
    cy.contains('Bienvenido')
  })
})