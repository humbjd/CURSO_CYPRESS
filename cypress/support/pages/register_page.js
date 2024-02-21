/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '#btnregister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '.errorLabel',
        successTitle: '#swl2-title',
        successSubtitle: '#swal2-html-container'
    }
}

// Ações

export default {

    saveRegister() {
        cy.get(elements.buttons.register)
            .click()
    },
    
    fillName(name) {
        cy.get(elements.fields.name)
            .type(name)
    },
    
    
    
    fillEmail (email) {
        cy.get(elements.fields.email)
            .type(email)
    },
    
    fillPassword (password) {
        cy.get(elements.fields.password)
            .type(password)
    }
    
}