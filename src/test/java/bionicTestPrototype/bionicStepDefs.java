package bionicTestPrototype;

import BionicPages.bionicWebForm;
import BionicPages.bionicLandingPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class bionicStepDefs {

    //For windown with head browser
    //static { System.setProperty("webdriver.chrome.driver" , "src/main/resources/driver/chromedriver.exe"); }
    //private WebDriver driver = new ChromeDriver();
    //bionicLandingPage blp =new bionicLandingPage(driver);

    //For Linux + Headless browser

    static{
        System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
    }
    private ChromeOptions options = new ChromeOptions();
    private WebDriver driver = new ChromeDriver(options.addArguments(
            "--headless",
            "window-size=1280x800",
            "no-sandbox",
            "–disable-dev-shm-usage",
            "start-maximized",
            "--disable-gpu",
            "--ignore-certificate-errors",
            "--disable-setuid-sandbox"));
    private bionicLandingPage blp =new bionicLandingPage(driver);
    private bionicWebForm bwf = new bionicWebForm(driver);


    @Given("^I navigate to bionic landing page with \"([^\"]*)\"$")
    public void i_navigate_to_bionic_landing_page_with(String url) throws Throwable {
        blp.NavigateToBionicLandingPage(url);
    }

    @When("^I verify tile content \"([^\"]*)\"$")
    public void i_verify_tile(String title) throws Throwable {
        blp.verifyTitle(title);
    }

    @Then("^I close the browser$")
    public void i_close_the_browser() throws Exception {
        driver.close();
    }

   @Given("^I navigate to bionic web-form page \"([^\"]*)\"$")
    public void iNavigateToBionicWebFormPage(String url) throws Throwable {
        bwf.navigateToWebForm(url);
    }

    @When("^I enter full name \"([^\"]*)\"$")
    public void iEnterFullName(String fullName) throws Throwable {
        bwf.enterFullName(fullName);
    }

    @And("^I enter valid email address \"([^\"]*)\"$")
    public void iEnterValidEmailAddress(String email) throws Throwable {
        bwf.enterEmail(email);
    }

    @And("^I enter valid company name \"([^\"]*)\"$")
    public void iEnterValidCompanyName(String cname) throws Throwable {
        bwf.enterCompanyName(cname);
    }

    @And("^I enter valid phone number \"([^\"]*)\"$")
    public void iEnterValidPhoneNumber(String phone) throws Throwable {
        bwf.enterPhoneNumber(phone);
    }

    @And("^I click Get a quote button$")
    public void iClickGetAQuoteButton() {
        bwf.clickGetAQuote();
    }

    @Then("^I verify lead is created in SalesForce$")
    public void iVerifyLeadIsCreatedInSalesForce() {
    }
}
