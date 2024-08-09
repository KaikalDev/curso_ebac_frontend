/// <reference types="cypress" />


describe('testes para a home', () => {
    beforeEach(() => {
        
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deste adicionar numero', () => {
        cy.get('[type="text"]').type('Novo Contato')
        cy.get('[type="email"]').type('novocontato@gmail.com')
        cy.get('[type="tel"]').type('(99) 9 8888-8888')

        cy.get('button.adicionar').click()
        cy.contains('.contato', 'Novo Contato').should('exist')
        cy.contains('.contato', 'Novo Contato').within(() => {
            cy.contains('.contato', '(99) 9 8888-8888').should('exist')
            cy.contains('.contato', 'novocontato@gmail.com').should('exist')
        })

    })
    it('Editar um contato existente', () => {    
        cy.contains('.contato', 'Novo Contato').within(() => {
            cy.get('button.edit').click();
        });
    
        cy.get('[type="text"]').clear().type('Contato Editado');
    
        cy.get('.alterar').click();
    
        cy.contains('.contato', 'Contato Editado').should('exist');
    })

    it('Deletar um contato existente', () => {    
        cy.contains('.contato', 'Contato Editado').within(() => {
            cy.get('button.delete').click();
        });
    
        cy.contains('.contato', 'Contato Editado').should('not.exist')
        cy.contains('.contato', '(99) 9 8888-8888').should('not.exist')
        cy.contains('.contato', 'novocontato@gmail.com').should('not.exist')
    })
})