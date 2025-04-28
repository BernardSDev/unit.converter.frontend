function getRandomNumber():number {
    return Math.random() * 99 + 1;
}

describe('Modal Calculations', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test="convert-button"]').click();
        cy.get('[data-test="conversion-modal"]').should('be.visible');
    });

    it('should randomly select a conversion option and validate calculation', () => {
        cy.get('[data-test="conversion-select"]')
            .find('option')
            .then(options => {
                expect(options.length).to.be.greaterThan(0);

                const randomIndex = Math.floor(Math.random() * options.length);
                const randomValue = options[randomIndex].value;
                cy.get('[data-test="conversion-select"]').select(randomValue);

                const randomNumber = getRandomNumber();
                cy.get('[data-test="conversion-input"]')
                    .clear()
                    .type(randomNumber.toString())
                    .then(() => {
                        expect(randomNumber).to.be.at.least(0).and.to.be.at.most(1000000000);
                    });

                cy.get('[data-test="conversion-result"]').should('exist');
            });
    });
});
