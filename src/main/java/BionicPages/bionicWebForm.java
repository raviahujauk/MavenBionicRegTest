package BionicPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class bionicWebForm extends webDriver {
    public bionicWebForm(WebDriver driver) {
        super(driver);
    }

    public bionicWebForm navigateToWebForm(String url) {
        driver.manage().window().maximize();
        driver.get(url);
        return new bionicWebForm(driver);
    }

    public bionicWebForm enterFullName(String fullname) {
        driver.findElement(By.xpath("(//input[@class='name'])[3]")).sendKeys(fullname);
        return new bionicWebForm(driver);
    }

    public bionicWebForm enterEmail(String email) {
        driver.findElement(By.xpath("(//input[@class='email'])[3]")).sendKeys(email);
        return new bionicWebForm(driver);
    }

    public bionicWebForm enterCompanyName(String compName) {
        driver.findElement(By.xpath("(//input[@class='cname'])[3]")).sendKeys(compName);
        return new bionicWebForm(driver);
    }

    public bionicWebForm enterPhoneNumber(String phone) {
        driver.findElement(By.xpath("(//input[@class='phone'])[3]")).sendKeys(phone);
        return new bionicWebForm(driver);
    }

    public bionicWebForm clickGetAQuote() {
        driver.findElement(By.xpath("//button[@type='submit' and contains(text(),'Get a quote')]")).click();
        return new bionicWebForm(driver);
    }
}
