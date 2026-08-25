Feature: Component Test for demo.codenbox.com

    this is common comoponent test of navigation bar across all the pages.
    @smoke
    Scenario: as an automation developer, i should able to perform component test
    Given I browse to the application
    When I click on search box, type 'MacBook' and hit enter
    And I validate the search result contain text 'MacBook'
    And I click on my account tab
    And I click on Login menu option
    And I click on Logo image
    Then Ensure back to home page with title 'Your Store'