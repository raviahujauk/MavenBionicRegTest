Feature: Verify bionic site is live
  As a user
  I navigate to bionic site
  So that site opens successfully

  @RegTest @DIG-5
  Scenario Outline: Verify title of landing page
    Given I navigate to bionic landing page with "<url>"
    When I verify tile content "Bionic - Your Business Essentials Sorted | Bionic"
    Then I close the browser
    Examples:
    | url                               |
    | https://bionic.co.uk/             |
    | https://bionic-qa.makeiteasy.com/ |

  @RegTest @DIG-8
  Scenario Outline: Web form and lead creation
    Given I navigate to bionic web-form page "<url>"
    When I enter full name "<full-name>"
    And I enter valid email address "<email>"
    And I enter valid company name "<company-name>"
    And I enter valid phone number "<phone>"
    And I click Get a quote button
    Then I verify lead is created in SalesForce
    And I close the browser
      Examples:
      | url                                                         | full-name   | email                   | company-name | phone        |
      | https://bionic-qa.makeiteasy.com/business-energy/web-form/  | Ravi Ahuja  | ravi.ahuja@bionic.co.uk | Jeevat LTD   | 07504555555  |
