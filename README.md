# 🧪 Testes Automatizados EBAC Store – Cypress

Este projeto automatiza testes do e-commerce [EBAC Store](https://lojaebac.ebaconline.art.br/) usando **Cypress**, com uma estrutura organizada baseada em **Page Object Model (POM)** e separação de responsabilidades.

---

## 📁 Estrutura do Projeto

```
cypress/
├── actions/           # Ações reutilizáveis (ex: login, compra)
├── e2e/               # Arquivos de teste (specs)
│   ├── login.cy.js
│   └── compra.cy.js
├── fixtures/
│   └── usuario.json   # Dados de entrada dos testes
├── pages/             # Elementos (PageObjects)
└── support/
    └── commands.js
```

---

## 🚀 Como configurar e executar os testes

### 1. Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- (Opcional) Git para clonar o projeto

### 2. Instalar dependências

Abra o terminal na raiz do projeto e execute:

```bash
npm install
```

### 3. Executar os testes

#### Modo interativo (GUI):

```bash
npx cypress open
```

#### Modo headless (terminal):

```bash
npx cypress run
```

---

## 📂 Resumo dos testes (`e2e/`)

### `login.cy.js`

> Testa o fluxo de login do usuário

- ✅ Login com sucesso
- ❌ Login com senha incorreta
- Os dados vêm de `fixtures/usuario.json`

### `compra.cy.js`

> Testa o fluxo completo de compra

- Login com dados válidos
- Seleção de um produto (cor e tamanho)
- Adição ao carrinho
- Preenchimento dos dados do checkout
- Finalização do pedido
- Validação da mensagem de sucesso

---

## ✅ Tecnologias Utilizadas

- Cypress
- JavaScript (ES6+)
- Node.js
- Page Object Model (POM)
- Testes orientados a dados com `fixtures`

---

## 📌 Dicas

- Você pode alterar os dados de teste em `cypress/fixtures/usuario.json`
- Para testes com múltiplos perfis, basta adicionar mais entradas no JSON e iterar nos testes
