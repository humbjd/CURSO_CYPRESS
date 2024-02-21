/// <reference types="cypress" />
describe('Interações', () => {

   beforeEach(() => {
      cy.visit('/')
   })
    
   it('Digitar em um campo', () => {
      // get() - selecionar elementos
      cy.visit('/')
         .get('.header-logo')

      cy.get('.top_header_left > p')
         .then((element) =>{
            console.log(element.text())
            element.hide()
         })
      cy.get('.form-control')
         .type('teste@tesqa.com')
         .get('.clear > .theme-btn-one')
         .click()



   })

     it('Select', () => {
         cy.get('.header-logo')
            

         cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()
         
         cy.get('#country')
            .select('Colombia')   
     })


     it('Checkout e radio button', () => {
         cy.get('.header-logo')
         

         cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()
      
         cy.get('#materialUnchecked')
            .check()
            .uncheck()

         cy.get('#css')
            .check()   
  })


})