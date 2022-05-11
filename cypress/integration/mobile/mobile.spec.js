/// <reference types="cypress" />
describe('sample', () => {
    beforeEach('open home', () => {
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            return false
        })
        cy.log(window.navigator.userAgent);
        cy.visit('/')
    })

    it('can click Spotlight to land on mobile home page', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Spotlight')
                .click({ force: true })
        })

        cy.get('#now-playing-section') // this is a mobile-only element
            .should('be.visible')
    })

    it('can click Spotlight to land on mobile home page', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Spotlight')
                .click({ force: true })
        })

        cy.get('#now-playing-section') // this is a mobile-only element
            .should('be.visible')
    })

    it('can click Movies to land on mobile /movies-in-theaters', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Movies')
                .click({ force: true })
        })

        cy.get('.mlp__listings') // this is a mobile-only element
            .should('be.visible')
    })
})
