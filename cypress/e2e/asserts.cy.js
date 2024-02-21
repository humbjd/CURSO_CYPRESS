/// <reference types="cypress" />

describe('Asserts', () => {
    
    it('Verificar se está visível', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()
        
        cy.get('.account_form > h3')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .and('have.text', 'Login')

        cy.get('.account_form > h3')
            .then(el => {
                console.log(el.text())
                expect(el.text()).to.equal('Login')
                expect(el).to.be.visible
            })
    })
})
