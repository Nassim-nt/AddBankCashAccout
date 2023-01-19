package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="src\\test\\java\\features",
	glue="steps",
	tags="@AddAcount",
	monochrome=true,
	dryRun=false,
	plugin= {
			"pretty",
			"html:target/cucumber",
			"json:targer/cucumber.json"
	}
		
		)
public class AddBankAccountRunner {

}
