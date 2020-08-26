package bionicTestPrototype;

import UKPowerPages.ukpCurrentPlanPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import UKPowerPages.ukpLandingPage;

public class ukpStepDefs {


    //Windown based browser
    static { System.setProperty("webdriver.chrome.driver" , "src/main/resources/driver/chromedriver.exe"); }
    private WebDriver driver = new ChromeDriver();

    private ukpLandingPage ukplp = new ukpLandingPage(driver);
    private ukpCurrentPlanPage ukpcp = new ukpCurrentPlanPage(driver);

    @Given("^I navigate to UKP landing page with \"([^\"]*)\"$")
    public void i_navigate_to_UKP_landing_page_with(String url) throws Exception {
        ukplp.NavigateToUKPLandingPage(url);
    }
    @When("^I enter postcode \"([^\"]*)\"$")
    public void i_enter_postcode(String postCode) throws Exception {
        ukplp.enterPostCode(postCode);
    }
    @When("^I click Compare now button$")
    public void i_click_Compare_now_button() throws Exception {
        ukplp.clickCompareNowButton();
    }
    @When("^I select Do you use gas option \"([^\"]*)\"$")
    public void i_select_Do_you_use_gas_option(String option) throws Exception {
        ukpcp.doYouUseGas(option);
        Thread.sleep(1000);
    }
    @When("^I select Economy seven option \"([^\"]*)\"$")
    public void i_select_Economy_seven_option(String e7option) throws Exception {
        ukpcp.economy7Option(e7option);
        Thread.sleep(1000);
    }
    @When("^I select Energy Usage Option \"([^\"]*)\"$")
    public void i_select_Energy_Usage_Option(String EnergyUsageOption) throws Exception {
         ukpcp.energyUsageOption(EnergyUsageOption);
        Thread.sleep(1000);
    }
    @And("^I select size of property \"([^\"]*)\"$")
    public void i_select_size_of_property(String PropertySize) throws Exception {
        ukpcp.enterPropertySize(PropertySize);
        Thread.sleep(1000);
    }
    @When("^I click See Result button$")
    public void i_click_See_Result_button() throws Exception {
        ukpcp.clickSeeResultButton();
        Thread.sleep(4000);
    }
    @Then("^I close the ukp browser$")
    public void i_close_the_ukp_browser() throws Exception {
        driver.quit();
    }
}
