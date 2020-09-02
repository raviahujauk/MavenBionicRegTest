$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/BionicSiteLive.feature");
formatter.feature({
  "name": "Verify bionic site is live",
  "description": "  As a user\n  I navigate to bionic site\n  So that site opens successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify title of landing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    },
    {
      "name": "@DIG-5"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify tile content \"Bionic - Your Business Essentials Sorted | Bionic\"",
  "keyword": "When "
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
        "url"
      ]
    },
    {
      "cells": [
        "https://bionic.co.uk/"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify title of landing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    },
    {
      "name": "@DIG-5"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic landing page with \"https://bionic.co.uk/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "bionicStepDefs.i_navigate_to_bionic_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify tile content \"Bionic - Your Business Essentials Sorted | Bionic\"",
  "keyword": "When "
});
formatter.match({
  "location": "bionicStepDefs.i_verify_tile(String)"
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
formatter.scenarioOutline({
  "name": "Web form and lead creation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    },
    {
      "name": "@DIG-8"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic web-form page \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter valid email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid company name \"\u003ccompany-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Get a quote button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify lead is created in SalesForce",
  "keyword": "Then "
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "full-name",
        "email",
        "company-name",
        "phone"
      ]
    },
    {
      "cells": [
        "https://bionic-qa.makeiteasy.com/business-energy/web-form/",
        "Ravi Ahuja",
        "ravi.ahuja@bionic.co.uk",
        "Jeevat LTD",
        "07504555555"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Web form and lead creation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    },
    {
      "name": "@DIG-8"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic web-form page \"https://bionic-qa.makeiteasy.com/business-energy/web-form/\"",
  "keyword": "Given "
});
