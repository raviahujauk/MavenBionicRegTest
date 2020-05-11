$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BionicSiteLive.feature");
formatter.feature({
  "line": 1,
  "name": "Verify bionic site is live",
  "description": "As a user\r\nI navigate to bionic site\r\nSo that site opens successfully",
  "id": "verify-bionic-site-is-live",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify title of landing page",
  "description": "",
  "id": "verify-bionic-site-is-live;verify-title-of-landing-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to bionic landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I verify tile content \"Bionic - Your Business Essentials Sorted | Bionic\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "verify-bionic-site-is-live;verify-title-of-landing-page;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 10,
      "id": "verify-bionic-site-is-live;verify-title-of-landing-page;;1"
    },
    {
      "cells": [
        "https://bionic.co.uk/"
      ],
      "line": 11,
      "id": "verify-bionic-site-is-live;verify-title-of-landing-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verify title of landing page",
  "description": "",
  "id": "verify-bionic-site-is-live;verify-title-of-landing-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to bionic landing page with \"https://bionic.co.uk/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I verify tile content \"Bionic - Your Business Essentials Sorted | Bionic\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bionic.co.uk/",
      "offset": 40
    }
  ],
  "location": "bionicStepDefs.i_navigate_to_bionic_landing_page_with(String)"
});
formatter.result({
  "duration": 19383397200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bionic - Your Business Essentials Sorted | Bionic",
      "offset": 23
    }
  ],
  "location": "bionicStepDefs.i_verify_tile(String)"
});
formatter.result({
  "duration": 11860300,
  "status": "passed"
});
});