package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AddAccountPage;
import pages.DashBoardPage;
import pages.LoginPage;
import pages.TestBase;

public class AddAccountStepDefinition extends TestBase {

	LoginPage loginpageObj;
	DashBoardPage dashBoaerdObj;
	AddAccountPage addAccountPageObj;

	@Before
	public void beforeRun() {
		initDriver();
		loginpageObj = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_enters_the_in_the_field() {
		driver.get("https://techfios.com/billing/?ng=login/");

	}

	@When("^User enters the \"([^\"]*)\" in the \"([^\"]*)\" field$")
	public void user_enters_the_in_the_field(String str1, String str2) {
		if (str2.equalsIgnoreCase("username")) {
			loginpageObj.enterUserName(str1);

		} else if (str2.equalsIgnoreCase("password")) {
			loginpageObj.enterPassword(str1);
		}

	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginpageObj.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String clickOnButton) {
		dashBoaerdObj = PageFactory.initElements(driver, DashBoardPage.class);
		addAccountPageObj = PageFactory.initElements(driver, AddAccountPage.class);
		switch (clickOnButton) {
		case "login":
			loginpageObj.clickSignInButton();
			break;
		case "bankCash":
			dashBoaerdObj.BankCashMenuDropDown();
			break;
		case "newAccount":
			dashBoaerdObj.NewAccountOnMenuDropDown();
			break;
		case "submit":
			addAccountPageObj.clickOnSubmitButton();
			break;
		default:
			System.out.println("Unable to click" + clickOnButton);
			break;

		}
	}

	@Then("^User enters \"([^\"]*)\" in the \"([^\"]*)\" field in accounts page$")
	public void user_enters_in_the_field_in_accounts_page(String arg1, String arg2) {
		
		if (arg2.equalsIgnoreCase("accountTitle")) {
			addAccountPageObj.enterAccountTitle(arg1);

		} else if (arg2.equalsIgnoreCase("description")) {
			addAccountPageObj.enterDescription(arg1);
		} else if (arg2.equalsIgnoreCase("initialBalance")) {
			addAccountPageObj.enterInitialBalance(arg1);
		}else if (arg2.equalsIgnoreCase("accountNumber")) {
			addAccountPageObj.enterAccountNumber(arg1);
		}else if (arg2.equalsIgnoreCase("contactPerson")) {
			addAccountPageObj.enterContactPerson(arg1);
		}else if (arg2.equalsIgnoreCase("Phone")) {
			addAccountPageObj.enterPhone(arg1);
		}else if (arg2.equalsIgnoreCase("internetBankingURL")) {
			addAccountPageObj.enterInternetBankingUrl(arg1);
		}

	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {

		String expectedtext = "Account Created Successfully";
		String actualText = addAccountPageObj.getTextAlert();
		Assert.assertEquals(expectedtext, actualText);
	}
	 @After
	 public void tearDown() {
		 driver.close();
		 driver.quit();
	 }
}
