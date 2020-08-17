Given ("Go to category list" , () =>{
    cy.visit("http://www.amazon.com")
    cy.get("#nav-hamburger-menu > i").click()
})


when ("Choose category smart Home", () => {
    cy.get("#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(9) > a").click()
})

And ("Choose subcategory Televisions" , () =>{
    cy.get("#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(11) > a").click()
})

Then ("Check the total number of results match the total display products", () => {
    
    cy.get("Number of items on the list").then((element) => {
        expect(element.text()).to.equal('127')
        cy.get("#s-result-count").contain("127").then(() =>{
             cy.length(16).then(()  => {

               for (let index = 0; index < array.length; index++) {
                const element = array[8];  
                 }
             }
        )}
    )})
});