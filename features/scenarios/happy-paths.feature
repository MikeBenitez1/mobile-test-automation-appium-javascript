Feature: Happy Paths

@checkout
Scenario: User can complete checkout with 2 items
  Given user clicks on the "first item" button
  And user adds "2 items" to the cart
  And user clicks on the "cart" button
  And user clicks on the "checkout" button
  And user login with valid credentials
  And user fills the checkout form with valid data
  And user clicks on the "to payment" button
  Then user should see the "payment checkout" page
  And user should see the "review order" button

