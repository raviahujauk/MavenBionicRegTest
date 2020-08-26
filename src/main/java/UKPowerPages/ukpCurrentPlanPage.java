package UKPowerPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

import static org.openqa.selenium.Keys.ENTER;

public class ukpCurrentPlanPage extends ukpLandingPage {
    public ukpCurrentPlanPage(WebDriver driver) { super(driver); }

    public ukpCurrentPlanPage doYouUseGas(String option) {
        if (option=="Yes" )
            driver.findElement(By.id("useGas-option-Yes")).click();
        else
            driver.findElement(By.id("useGas-option-No")).click();

        return new ukpCurrentPlanPage(driver);
    }
    public ukpCurrentPlanPage economy7Option(String option) throws InterruptedException {
        if (option=="Yes")
            driver.findElement(By.id("haveEconomy7Meter-option-Yes")).click();
        else
            driver.findElement(By.id("haveEconomy7Meter-option-No")).click();
        return new ukpCurrentPlanPage(driver);
    }
    public ukpCurrentPlanPage energyUsageOption(String option) throws InterruptedException {
        if (option=="Yes")
            driver.findElement(By.id("knowUseSpendEnergy-option-Yes")).click();
        else
            driver.findElement(By.id("knowUseSpendEnergy-option-No")).click();
        return new ukpCurrentPlanPage(driver);
    }
    public ukpCurrentPlanPage enterPropertySize(String propertySize) {
        if(propertySize.equals("1Bedroom"))
                driver.findElement(By.id("estimatedSpendOrUsage-option-0")).click();
        else if(propertySize.equals("2to3Bedroom"))
                driver.findElement(By.id("estimatedSpendOrUsage-option-1")).click();
        else
                driver.findElement(By.id("estimatedSpendOrUsage-option-2")).click();

        return new ukpCurrentPlanPage(driver);
    }
    public ukpCurrentPlanPage clickSeeResultButton() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement seebutton = driver.findElement(By.id("see-results-btn-id"));
        seebutton.click();
        return new resultsPage(driver);
    }
}
