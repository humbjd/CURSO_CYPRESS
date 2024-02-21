/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page'

const user_data_valid = require('../fixtures/desafio_valid_data.json')
const user_data_invalid = require('../fixtures/desafio_invalid_data.json')

describe('Teste de conhecimento - Feature: CADASTRO DE USUARIO', () => {
    
    beforeEach(() => {
        
        home_page.accessRegisterPage()
        

    })

    it('Validar campo nome vazio', () => {
        cy.get('#email')
            .type(user_data_valid.email)
        cy.get('#password')
            .type(user_data_valid.password)

        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')

    })

    it('Validar campo e-mail vazio', () => {
        
        cy.fillName(user_data_valid.name)
        
        cy.get('#password')
            .type(user_data_valid.password)

        cy.saveRegister()
        
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
       
        cy.fillName(user_data_valid.name)

        cy.fillEmail(user_data_invalid.invalidEmail)
        
        cy.fillPassword(user_data_valid.password)

        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo senha vazio', () => {
        
        cy.fillName(user_data_valid.name)

        cy.fillEmail(user_data_valid.email)

        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {
        cy.get('#user')
            .type(user_data_valid.name)
        cy.get('#email')
            .type(user_data_valid.email)
        
        cy.fillPassword(user_data_invalid.invalidPassword)

        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })
    
    it('Validar cadastro realizado com sucesso', () => {

        const randomName = faker.person.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz


        cy.get('#user')
            .type(randomName)
        cy.get('#email')
            .type(randomEmail)
        cy.get('#password')
            .type(user_data_valid.password)

        cy.saveRegister()
        
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
            
        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${randomName}`)
            
    })
})
