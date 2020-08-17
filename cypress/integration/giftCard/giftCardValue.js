//const { when } = require("cypress/types/jquery")

Given ("Open website" , () =>{
    cy.visit("http://www.amazon.com")
})


when ("I click on sign in button", () => {
    cy.get("#nav-link-accountList").trigger('mouseover'),
    cy.wait(1000),
    cy.get("#nav-flyout-ya-newCust > a").trigger('mouseover').click();
})

And ("Create an account and login" , () =>{
    cy.get("#ap_customer_name").type("Huda");
    cy.get("#ap_email").type("amazontasklogin.1@gmail.com"); //to type amazontasklogin@gmail.com
    cy.get("#ap_password").type("Hh111111");
    cy.get("#ap_password_check").type("Hh111111");
    cy.get("#continue").click();
    cy.wait(1000)
    cy.window().its('open').should('be.called')
    cy.visit("https://mail.google.com/mail/u/6/#inbox")
    cy.get("#identifierId").type("amazontasklogin1@gmail.com")
    cy.get("#identifierNext > div > button > span").click()
    cy.get("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input").type("Hh@111111")
    cy.get("#passwordNext > div > button > div.VfPpkd-RLmnJb").click()
    cy.get("#\:3q > div > div.aio.UKr6le").click()
    cy.get("div:nth-child(1) > form > div:nth-child(2) > input").click()
    cy.get("#a-autoid-0 > span").click()

})

And ("login" , () =>{
    cy.get("#nav-link-accountList > div > span").click();
    
})

And ("Click on gift card" , () =>{
    cy.get("#a-page > div.a-container > div > div:nth-child(3) > div:nth-child(1) > a > div > div > div > div.a-column.a-span9.a-span-last > h2").click();
})

Then ("The balance of gift card should be $0.00", () => {
    cy.get("#gc-ui-balance-gc-balance-value").should('have.text', '$0.00');
    cy.get("ul > li:nth-child(1) > span > a > span").should('have.text', '$0.00');
})