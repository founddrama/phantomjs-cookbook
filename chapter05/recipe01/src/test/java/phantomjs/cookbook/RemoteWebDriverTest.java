package phantomjs.cookbook;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;

import static org.junit.Assert.assertEquals;

public class RemoteWebDriverTest {

    private static final String THE_TEXT = "PhantomJS + GhostDriver";

    // Don't forget to have a PhantomJS instance running:
    // $ phantomjs --webdriver=4444

    @Test
    public void testGhostDriver() throws Exception {
        WebDriver driver = new RemoteWebDriver(
                new URL("http://localhost:4444/"),
                DesiredCapabilities.phantomjs());

        driver.get("http://localhost:3000/input-demo");

        WebElement demo = driver.findElement(By.id("demo"));

        demo.sendKeys(THE_TEXT);
        demo.sendKeys(Keys.ENTER);

        WebElement stage = driver.findElement(By.id("stage"));

        final String stageText = stage.getText();

        assertEquals(THE_TEXT, stageText);
    }
}
