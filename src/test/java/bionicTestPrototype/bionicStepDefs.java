package bionicTestPrototype;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import BionicPages.bionicLandingPage;
public class bionicStepDefs {

    static{
        System.setProperty("webdriver.chrome.driver", "src/main/resources/driver/chromedriver.exe");
    }

    private WebDriver driver = new ChromeDriver();
    private bionicLandingPage blp =new bionicLandingPage(driver);

    @Given("^I navigate to bionic landing page with \"([^\"]*)\"$")
    public void i_navigate_to_bionic_landing_page_with(String url) throws Throwable {
        blp.NavigateToBionicLandingPage(url);
    }

    @Then("^I verify tile content \"([^\"]*)\"$")
    public void i_verify_tile(String title) throws Throwable {
        blp.verifyTitle(title);
    }
}
