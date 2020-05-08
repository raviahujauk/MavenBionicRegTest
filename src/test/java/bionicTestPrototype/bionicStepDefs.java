package bionicTestPrototype;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import BionicPages.bionicLandingPage;
import org.openqa.selenium.chrome.ChromeOptions;

public class bionicStepDefs {

    //static{
    //    System.setProperty("webdriver.chrome.driver", "src/main/resources/driver/chromedriver.exe");
    //}
    //WebDriver driver;
    ChromeOptions options = new ChromeOptions();

        static {
            //For Linux headless browser
            String chromeDriverPath = "/usr/local/bin/chromedriver";
            System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        }
        @Before
                public void setup() {
            options.addArguments("--headless");
            options.addArguments("--headless", "--disable-gpu", "--window-size=1920,1200", "--ignore-certificate-errors");
        }
        //ChromeOptions options = new ChromeOptions();
        WebDriver driver = new ChromeDriver(options);


    //private WebDriver driver = new ChromeDriver();
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
