Feature: Verify bionic site is live
  As a user
  I navigate to bionic site
  So that site opens successfully

  @DIG-2
  Scenario: Verify title of landing page
    Given I navigate to bionic landing page with "https://bionic.co.uk/"
    Then I verify tile content "Bionic - Your Business Essentials Sorted | Bionic"