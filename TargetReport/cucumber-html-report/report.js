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
    },
    {
      "cells": [
        "https://bionic-qa.makeiteasy.com/"
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
  "name": "I navigate to bionic landing page with \"https://bionic-qa.makeiteasy.com/\"",
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
formatter.match({
  "location": "bionicStepDefs.iNavigateToBionicWebFormPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "When "
});
formatter.match({
  "location": "bionicStepDefs.iEnterFullName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid email address \"ravi.ahuja@bionic.co.uk\"",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iEnterValidEmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid company name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iEnterValidCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid phone number \"07504555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iEnterValidPhoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Get a quote button",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iClickGetAQuoteButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify lead is created in SalesForce",
  "keyword": "Then "
});
formatter.match({
  "location": "bionicStepDefs.iVerifyLeadIsCreatedInSalesForce()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "bionicStepDefs.iNavigateToBionicWebFormPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "When "
});
formatter.match({
  "location": "bionicStepDefs.iEnterFullName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid email address \"ravi.ahuja@bionic.co.uk\"",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iEnterValidEmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid company name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iEnterValidCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid phone number \"07504555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iEnterValidPhoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Get a quote button",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.iClickGetAQuoteButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify lead is created in SalesForce",
  "keyword": "Then "
});
formatter.match({
  "location": "bionicStepDefs.iVerifyLeadIsCreatedInSalesForce()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "bionicStepDefs.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/UKP.feature");
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
  "name": "I close the ukp browser",
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
    },
    {
      "cells": [
        "https://qa.ukpower.co.uk/",
        "ha85bd",
        "No",
        "No",
        "No",
        "2to3Bedroom"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"useGas-option-No\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59776}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 84.0.4147.135, webStorageEnabled: true}\nSession ID: d21030f38c06673bbc2a1de1e71ed2aa\n*** Element info: {Using\u003did, value\u003duseGas-option-No}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat UKPowerPages.ukpCurrentPlanPage.doYouUseGas(ukpCurrentPlanPage.java:18)\r\n\tat bionicTestPrototype.ukpStepDefs.i_select_Do_you_use_gas_option(ukpStepDefs.java:36)\r\n\tat ✽.I select Do you use gas option \"No\"(src/test/resources/UKP.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select Economy seven option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Economy_seven_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Energy Usage Option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Energy_Usage_Option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select size of property \"1Bedroom\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_size_of_property(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click See Result button",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_click_See_Result_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close the ukp browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ukpStepDefs.i_close_the_ukp_browser()"
});
formatter.result({
  "status": "skipped"
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
  "name": "I enter postcode \"ha85bd\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"useGas-option-No\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59823}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 84.0.4147.135, webStorageEnabled: true}\nSession ID: 237bc10c3f2f6507c323c40801f3d4ab\n*** Element info: {Using\u003did, value\u003duseGas-option-No}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat UKPowerPages.ukpCurrentPlanPage.doYouUseGas(ukpCurrentPlanPage.java:18)\r\n\tat bionicTestPrototype.ukpStepDefs.i_select_Do_you_use_gas_option(ukpStepDefs.java:36)\r\n\tat ✽.I select Do you use gas option \"No\"(src/test/resources/UKP.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select Economy seven option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Economy_seven_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Energy Usage Option \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_Energy_Usage_Option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select size of property \"2to3Bedroom\"",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_select_size_of_property(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click See Result button",
  "keyword": "And "
});
formatter.match({
  "location": "ukpStepDefs.i_click_See_Result_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close the ukp browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ukpStepDefs.i_close_the_ukp_browser()"
});
formatter.result({
  "status": "skipped"
});
});