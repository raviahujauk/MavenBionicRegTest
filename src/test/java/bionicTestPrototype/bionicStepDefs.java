package bionicTestPrototype;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import BionicPages.bionicLandingPage;
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


    @Given("^I navigate to bionic landing page with \"([^\"]*)\"$")
    public void i_navigate_to_bionic_landing_page_with(String url) throws Throwable {


        blp.NavigateToBionicLandingPage(url);
    }

    @Then("^I verify tile content \"([^\"]*)\"$")
    public void i_verify_tile(String title) throws Throwable {
        blp.verifyTitle(title);
    }
}
