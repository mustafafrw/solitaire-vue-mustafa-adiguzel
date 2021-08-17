describe('start game page tests', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/#/")
    })
    it('should have 2 game option', () => {

      cy.get('.option-container').should('have.length', 2)

    })
    it ('should have Solitaire option', () => {

        cy.get('.option-container').last().should(($option) => {
          expect($option).to.contain('Solitaire')
        })

      })
    it ('should have Reverse Solitaire option', () => {

      cy.get('.option-container').last().should(($option) => {
        expect($option).to.contain('Reverse Solitaire')
      })

    })
    it ('should have Play buttons in each option', () => {

        cy.get('.option-container button').should(($option) => {
          expect($option).to.contain('Play')
        })
        
    })
    it('should click to first option and it should be redirected to the game page', () => {

        cy.get('.option-container button')
            .first()
            .click()

        cy.get('.time-container')
            .should('have.length', 1)
    })
})