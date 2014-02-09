package phantomjs.cookbook;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import static org.junit.Assert.assertEquals;

public class PhantomJSDriverTest {

    private static final String THE_TEXT = "PhantomJS + Ghost Driver";

    @Test
    public void testPhantomJSDriver() {
        WebDriver driver = new PhantomJSDriver();

        driver.get("http://localhost:3000/input-demo");

        WebElement demo = driver.findElement(By.id("demo"));

        demo.sendKeys(THE_TEXT);
        demo.sendKeys(Keys.ENTER);

        WebElement stage = driver.findElement(By.id("stage"));

        final String stageText = stage.getText();

        assertEquals(THE_TEXT, stageText);
    }

}
