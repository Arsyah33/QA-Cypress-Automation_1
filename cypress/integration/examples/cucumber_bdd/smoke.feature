Feature: Ecommerce Smoke Test

    This is e2e demo smoke test for cucumber-bdd project

Scenario: As an Automation Developer , should able to perform e-2-e smoke test
Given I Succesfully browse to the app
When I Confirm to find all 4 products
And I click on product name is 'MacBook'
And I validate the product name is 'MacBook' on product details page
And I validate the prize is '$602.00'
And I ensure 'Description' tab is available
And I see description has 'Intel Core 2 Duo processor' title
And I write a review
And I give 5 star rating and submit review
And I validate success mesages for submiting review
And I add item to cart
And I click on chart menu & validate 
And I click on checkout link
And I click on Loginpage link 
And Login with invalid credential
And Login with valid credential
Then Ensure sum of amount is equalto total amount



@smoke
Scenario Outline:  As an Automation Developer , should able to perform e-2-e smoke test
Given I Succesfully browse to the app
When I Confirm to find all 4 products
And I click on product name is '<productName>'

Examples:
    | productName |
    | MacBook |