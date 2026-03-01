import BasePage from "../BasePage";

export default class CheckoutPage extends BasePage {
    static clickOnLoginLink() {
        return cy.get('form[id="form-register"] p a strong').click()
    }

    static validateCheckoutAmount() {
        let sum = 0
        cy.get('table[class="table table-bordered table-hover"] tfoot tr td:nth-child(2)')
            .each(($el, index, $list) => {

                if (index < $list.length - 1) {
                    const price = $el.text() //  "$500.00" $1,20.00 //500 -> 500.00
                    // remove $ sign or ,string need to convert to number: regex /[^0-9.-] +/g
                    const amount = parseFloat(price.replace(/[^0-9.-]+/g, '')) //100
                    sum = sum + amount // $5002.00 + 100.00
                    cy.log('sum of amount is' + sum);

                }

            }).then(() => {
                cy.get('tfoot > :nth-child(4) > :nth-child(2)').invoke('text').then((total) => {
                    const totalAmount = parseFloat(total.replace(/[^0-9.-]+/g, '')) //602.00
                    expect(totalAmount).to.equal(sum) // 602.00
                })

            })
    }
}