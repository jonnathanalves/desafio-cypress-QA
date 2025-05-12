import { CompraElements } from '../pages/CompraPage'

export class CompraActions {
  irParaHome(){
    cy.get(CompraElements.home).click()
  }

  selecionarProduto() {
    cy.get(CompraElements.produto).first().click()
  }

  escolherTamanho(tamanho) {
    cy.get(CompraElements.tamanho(tamanho)).click()
  }

  escolherCor(cor) {
    cy.get(CompraElements.cor(cor)).click()
  }

  adicionarAoCarrinho() {
    cy.get(CompraElements.botaoAdicionar).click()
  }

  irParaCarrinho() {
    cy.get(CompraElements.botaoVerCarrinho).click()
  }

  finalizarCompra() {
    cy.get(CompraElements.botaoCheckout).click()
  }

  preencherDadosCheckout(cliente) {
  cy.get(CompraElements.inputNome).clear().type(cliente.nome)
  cy.get(CompraElements.inputSobrenome).clear().type(cliente.sobrenome)
  cy.get(CompraElements.inputEndereco).clear().type(cliente.endereco)
  cy.get(CompraElements.inputCidade).clear().type(cliente.cidade)
  cy.get(CompraElements.inputCEP).clear().type(cliente.cep)
  cy.get(CompraElements.inputTelefone).clear().type(cliente.telefone)
  cy.get(CompraElements.seletorEstado).click()
  cy.get(CompraElements.campoBuscaEstado).type(`${cliente.estado}{enter}`)
}


  confirmarPedido() {
    cy.get(CompraElements.pagamentoBoleto).click()
    cy.get(CompraElements.checkLiConcordo).check({ force: true })
    cy.get(CompraElements.botaoFinalizar).click()
  }

  validarCompra() {
    cy.get(CompraElements.mensagemSucesso).should('contain', 'Obrigado. Seu pedido foi recebido.')
  }
}
