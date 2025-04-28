describe('End-to-End User Interactions', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('It should identify elements', () => {
        cy.get('[data-test="convert-button"]').contains('Convert now')
        cy.get('h1').contains('UnitConvert')
    })

    it("It should open and close the modal", () => {
        cy.get('[data-test="convert-button"]').click()
        cy.get('[data-test="close-button"]').click()
    })
})