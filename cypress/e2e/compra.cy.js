import { LoginActions } from '../actions/LoginActions'
import { CompraActions } from '../actions/CompraActions'

const login = new LoginActions()
const compra = new CompraActions()

describe('Fluxo de comprar na EBAC Store', () => {
  beforeEach(() => {
    cy.fixture('usuario').as('dados')
  })

  it('Compra completa com sucesso', function () {
    login.acessarLogin()
    login.preencherEmail(this.dados.login.email)
    login.preencherSenha(this.dados.login.senha)
    login.clicarLogin()
    login.validarLogin(this.dados.login.usuario)

    compra.irParaHome()

    compra.selecionarProduto()
    compra.escolherTamanho(this.dados.produto.tamanho)
    compra.escolherCor(this.dados.produto.cor)
    compra.adicionarAoCarrinho()
    compra.irParaCarrinho()
    compra.finalizarCompra()
    compra.preencherDadosCheckout(this.dados.cliente)
    compra.confirmarPedido()
    compra.validarCompra()
  })
})
