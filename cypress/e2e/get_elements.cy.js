describe('Get Elements', () => {
    
   it('Encontrar elementos', () => {
      // get() - selecionar elementos
      cy.visit('/')
         .get('.header-logo')

      // contains() - verificar se contém o texto
      cy.get('#top_header').as('cabecalho')
         .contains('Login')

      // find() - encontrar elementos
      cy.get('#top_header')
         .find('.fa-user')

      // as() - alias ou seja atribui apelido
      cy.get('@cabecalho')
         .find('.fa-user')

   })
})