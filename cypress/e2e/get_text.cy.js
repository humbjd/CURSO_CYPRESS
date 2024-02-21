describe.only('Get Texts', () => {
    
   it('Obter texto de um elemento', () => {
      // get() - selecionar elementos
      cy.visit('/')
         .get('.header-logo')

      cy.get('.top_header_left > p')
         .then((element) =>{
            console.log(element.text())
            element.hide()
         })

   })
})