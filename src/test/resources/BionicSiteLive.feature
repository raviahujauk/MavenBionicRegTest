Feature: Verify bionic site is live
  As a user
  I navigate to bionic site
  So that site opens successfully

  Scenario Outline: Verify title of landing page
    Given I navigate to bionic landing page with "<url>"
    Then I verify tile content "Bionic - Your Business Essentials Sorted | Bionic"
    Examples:
      | url                    |
      | https://bionic.co.uk |