Feature: Verify bionic site is live
  As a user
  I navigate to bionic site
  So that site opens successfully

  @RegTest @DIG-2
  Scenario: Verify title of landing page
    Given I navigate to bionic landing page with "https://bionic.co.uk/"
    When I verify tile content "Bionic - Your Business Essentials Sorted | Bionic"
    Then I close the browser

  @RegTest @DIG-5
  Scenario Outline: Verify title of landing page
    Given I navigate to bionic landing page with "<url>"
    When I verify tile content "Bionic - Your Business Essentials Sorted | Bionic"
    Then I close the browser
    Examples:
    | url                               |
    | https://bionic.co.uk/             |
    | https://bionic-qa.makeiteasy.com/ |