Feature: Amazon new account

Scenario: Check gift card's balance is $0.00
Given Open website
When I click on sign in button
And Create an account and login
And Click on my account
And Click on gift card
Then The balance of gift card should be $0.00
