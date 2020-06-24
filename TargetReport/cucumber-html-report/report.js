$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/UKP.feature");
formatter.feature({
  "name": "Verify UKP site scenarios",
  "description": "  As a user\n  I navigate to UKP QA site\n  So that regression test pass successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify current page for electric",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UKP-TST1"
    }
  ]
});
formatter.step({
  "name": "I navigate to UKP landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Compare now button",
  "keyword": "And "
});
formatter.step({
  "name": "I select Do you use gas option \"\u003cDoyouUseGasOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select Economy seven option \"\u003cE7Option\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select Energy Usage Option \"\u003cenergy-usage-option\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select size of property \"\u003cproperty-size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click See Result button",
  "keyword": "And "
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "postcode",
        "DoyouUseGasOption",
        "E7Option",
        "energy-usage-option",
        "property-size"
      ]
    },
    {
      "cells": [
        "https://qa.ukpower.co.uk/",
        "ha85hf",
        "No",
        "No",
        "No",
        "1Bedroom"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify current page for electric",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UKP-TST1"
    }
  ]
});
formatter.step({
  "name": "I navigate to UKP landing page with \"https://qa.ukpower.co.uk/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ukpStepDefs.i_navigate_to_UKP_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"ha85hf\"",
  "keyword": "When "
});
formatter.match({
  "location": "ukpStepDefs.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Compare now button",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_click_Compare_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Do you use gas option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Do_you_use_gas_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Economy seven option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Economy_seven_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Energy Usage Option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Energy_Usage_Option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select size of property \"1Bedroom\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_size_of_property(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click See Result button",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_click_See_Result_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "bionicStepDefs.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});