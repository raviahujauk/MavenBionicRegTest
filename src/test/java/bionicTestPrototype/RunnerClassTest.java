package bionicTestPrototype;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ={"src/test/resources"},
        //glue={"bionicStepDefs"},
        plugin={"html:TargetReport/cucumber-html-report",
                "json:TargetReport/cucuber.json",
                "junit:TargetReport/cucuber.xml",
                "rerun:TargetReport/rerun.txt" }
)

public class RunnerClassTest {
}
