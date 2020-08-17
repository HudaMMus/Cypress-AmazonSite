Feature: Change Currency

   Ensure that the currency is changed in products price

Scenario: Check the selected currency displayed for the products' price
Given I click on change currency
When Choose the new currency from the drop-down list
And Click on save button
Then Ensure that the currency changed at products price