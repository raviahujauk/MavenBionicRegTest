package UKPowerPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ukpLandingPage extends webDriver {

    public ukpLandingPage(WebDriver driver) { super(driver); }

    public ukpLandingPage NavigateToUKPLandingPage(String url) {
        driver.manage().window().maximize();
        driver.get(url);
        return new ukpLandingPage (driver);
    }
    public ukpLandingPage enterPostCode(String PostCode) {
        driver.findElement(By.id("postcode_box_1")).sendKeys(PostCode);
        return new ukpLandingPage (driver);
    }
    public ukpLandingPage clickCompareNowButton() {
        driver.findElement(By.xpath("//form[@class='postcode-box formtastic form-inline splash-postcode']/div[@class='form-group']/div[@class='form-wrapper']/button[@type='submit']")).click();
        return new ukpCurrentPlanPage (driver);
    }

}
