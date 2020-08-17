Feature: Ensure that the number of products results from search is equal the total number

    Ensure that the number of products results from search is equal the total number

Scenario: Check the total displayed number of results for category Smart Home | Televisions
Given Go to category list
When Choose category smart Home
And Choose subcategory Televisions
Then Check the total number of results match the total display products