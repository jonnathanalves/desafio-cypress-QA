import { LoginActions } from '../actions/LoginActions'

const login = new LoginActions()

describe('Login - EBAC Store', () => {
  beforeEach(() => {
    cy.fixture('usuario').as('dados')
  })

  it('Login com sucesso', function () {
    login.acessarLogin()
    login.preencherEmail(this.dados.login.email)
    login.preencherSenha(this.dados.login.senha)
    login.clicarLogin()
    login.validarLogin(this.dados.login.usuario)
  })
})
