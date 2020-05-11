package bionicTestPrototype;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ={"src/test/resources"},
        //glue={"bionicStepDefs"},
        plugin={"html:xray/TargetReport/cucumber-html-report",
                "json:xray/TargetReport/cucuber.json",
                "junit:xray/TargetReport/cucuber.xml",
                "rerun:xray/TargetReport/rerun.txt" }
)

public class RunnerClassTest {
}
