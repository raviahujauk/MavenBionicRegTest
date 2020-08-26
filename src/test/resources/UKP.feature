Feature: Verify UKP site scenarios
  As a user
  I navigate to UKP QA site
  So that regression test pass successfully

  @UKP-TST1
  Scenario Outline: Verify current page for electric
    Given I navigate to UKP landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Compare now button
    And I select Do you use gas option "<DoyouUseGasOption>"
    And I select Economy seven option "<E7Option>"
    And I select Energy Usage Option "<energy-usage-option>"
    And I select size of property "<property-size>"
    And I click See Result button
    Then I close the ukp browser
    Examples:
      | url                          | postcode | DoyouUseGasOption | E7Option | energy-usage-option | property-size |
      | https://qa.ukpower.co.uk/    | ha85hf   | No                | No       |  No                 | 1Bedroom      |
      | https://qa.ukpower.co.uk/    | ha85bd   | No                | No       |  No                 | 2to3Bedroom   |
#      | https://ukpower.co.uk/       | ha85bd   | No                | No       |  No                 | 4+Bedroom     |
#      | https://ukpower.co.uk/       | ha85gh   | No                | No       |  No                 | 4+Bedroom     |