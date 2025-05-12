import { LoginElements } from '../pages/LoginPage'

export class LoginActions {
  acessarLogin() {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  }

  preencherEmail(email) {
    cy.get(LoginElements.inputEmail).type(email)
  }

  preencherSenha(senha) {
    cy.get(LoginElements.inputSenha).type(senha)
  }

  clicarLogin() {
    cy.get(LoginElements.botaoLogin).click()
  }

  validarLogin(usuario) {
    cy.get(LoginElements.mensagemSucesso).should('contain', usuario)
  }
}
