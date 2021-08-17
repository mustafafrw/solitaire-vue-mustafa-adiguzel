describe('Game Screen Card - Board Length Tests', () => {

    beforeEach(() => {

        cy.visit("http://localhost:8080/#/")

        cy.get('.option-container button')
            .first()
            .click()

    })
    it('should have 10 boards', () => {

        cy.get(".table-body .board").should("have.length", 10)

    });
    it('should have 54 cards on the table', () => {

        cy.get(".table-body .card").should("have.length", 54)

    });
    it('should have 40 closed cards on the table', () => {

        cy.get(".table-body .card .card-back").should("have.length", 40)

    });
    it('should have 14 open cards on the table', () => {

        cy.get(".table-body .card .card-open").should("have.length", 14)

    });
    it('should have 6 cards on the first board', () => {

        cy.get(".table-body .board").first().find(".card").should("have.length", 6)

    });
    it('should have 5 cards on the last board', () => {

        cy.get(".table-body .board").last().find(".card").should("have.length", 5)

    });

    it('should have 2 open cards on the first board', () => {

        cy.get(".table-body .board").first().find(".card-open").should("have.length", 2)

    });
    it('should have 1 open cards on the last board', () => {

        cy.get(".table-body .board").last().find(".card-open").should("have.length", 1)

    });
});
describe('Game Screen Top Navigations Tests', () => {

    beforeEach(() => {

        cy.visit("http://localhost:8080/#/")

        cy.get('.option-container button')
            .first()
            .click()

    })
    it('should have timer', () => {

        cy.get('.time-container')
            .should('have.length', 1)

    });
    it('should have restart button', () => {

        cy.get('.navigation-container button')
            .first()
            .should($option => {
                expect($option).to.contain('Restart')
            })

    });
    it('should have back button', () => {

        cy.get('.navigation-container button')
            .last()
            .should($option => {
                expect($option).to.contain('Back')
            })

    });
});
describe('Game Screen Deck -Middle cards- Tests ', () => {

    beforeEach(() => {

        cy.visit("http://localhost:8080/#/")

        cy.get('.option-container button')
            .first()
            .click()

    })
    it('should have table-deck container', () => {

        cy.get('.table-deck')
            .should('have.length', 1)

    });
    it('should have 1 card inside table-deck', () => {

        cy.get('.table-deck .deck-card-container .card-back')
            .should('have.length', 1)

    });
    it('should have 8 place holders inside table deck', () => {

        cy.get('.table-deck .placeholder-container .card-placeholder')
            .should('have.length', 8)

    });
   
});