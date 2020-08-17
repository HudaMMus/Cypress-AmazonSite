
Given ("I click on change currency" , () =>{
    cy.visit("http://www.amazon.com")
    cy.wait(1000),
    cy.get("#icp-nav-flyout > span").trigger('mouseover'),
    cy.wait(1000),
    cy.get("#nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(13) > span > a").trigger('mouseover').click();
})

when ("Choose the new currency from the drop-down list", () => {
    cy.get("#a-autoid-0-announce").click({force: true})
    cy.wait(3000),
    cy.get("#icp-sc-dropdown_3").click()
})

And ("Click on save button" , () =>{  
    cy.get("#icp-btn-save > span > input").click();    
})

Then ("Ensure that the currency changed at products price", () => {
    cy.wait(1000),
    cy.get("#twotabsearchtextbox").type("macbook air");
    cy.wait(3000),
    cy.get("#nav-search > form > div.nav-right > div > input").click({force:true});
    cy.wait(1000),
    cy.get("div > span:nth-child(4) div:nth-child(1) > div > span > div > div > div:nth-child(2) div > div > a > span:nth-child(1) > span:nth-child(2) > span.a-price-symbol").should("be.visible").and("contain.text","AED")
});