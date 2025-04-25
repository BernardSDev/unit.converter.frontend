describe('End-to-End User Interactions', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it("It should identify elements", () => {
        cy.get('[data-test="convert-button"]').click()
        cy.get('h1').contains('UnitConvert')
    })
})