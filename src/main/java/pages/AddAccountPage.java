package pages;

import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddAccountPage {

	WebDriver driver;

	public AddAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement InitialBalace;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement PhoneN;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement InternetBankingUrl;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement SubmitButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement AlertSucss;

	public int generateRandomNum(int boundruNum) {
		Random rnd = new Random();
		int generateNum = rnd.nextInt(boundruNum);
		return generateNum;
	}

	public void enterAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle + generateRandomNum(999));
	}

	public void enterDescription(String description) {
		Description.sendKeys(description + generateRandomNum(999));
	}

	public void enterInitialBalance(String initialBalance) {
		InitialBalace.sendKeys(initialBalance + generateRandomNum(999));
	}

	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber + generateRandomNum(999));
	}

	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson + generateRandomNum(999));
	}

	public void enterPhone(String Phone) {
		PhoneN.sendKeys(Phone + generateRandomNum(999));
	}

	public void enterInternetBankingUrl(String internetBankingURL) {
		InternetBankingUrl.sendKeys(internetBankingURL + generateRandomNum(999));
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
	}

	public void clickOnSubmitButton() {
		SubmitButton.click();

	}

	public String getTextAlert() {
		return driver.findElement(By.xpath("//*[@id=\"page-wrapper\"]/div[3]/div[1]")).getText();
	}

}
