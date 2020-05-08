package BionicPages;

import org.openqa.selenium.WebDriver;
import org.junit.Assert;
public class bionicLandingPage extends webDriver {

    public bionicLandingPage(WebDriver driver) {
        super(driver);
    }

    public bionicLandingPage NavigateToBionicLandingPage(String url) {
        driver.manage().window().maximize();
        driver.get(url);
        return new bionicLandingPage (driver);
    }

    public bionicLandingPage verifyTitle (String title) {
        String Actual = driver.getTitle();

        if (Actual.equals(title)) {
            System.out.println("verifyTitle - Test Passed!");
        } else {
            System.out.println("verifyTitle - Test Failed");
            Assert.fail();
        }
        return new bionicLandingPage (driver);
    }

}
