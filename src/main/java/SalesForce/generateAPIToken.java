package SalesForce;

import io.restassured.RestAssured;
import io.restassured.response.Response;

    public class generateAPIToken {

    public String generateToken() {

        String clintID = "3MVG9KlmwBKoC7U0uYeOpPsIjkPi15xXItYtaDKhz2KzW0VDZxOSi_ypNVeDAZilzmo5LOieFQT2makm3t2Q5";
        String clintSecret = "ECA50EEE05D7AB1602F71EBE39D8C33F986E04E9EAE433707CEBFADCC342B3D4";
        String password = "Calmearth63jZvmT6EqQvFeq7eOJoN6pxaL";
        Response response = RestAssured.
                given()
                .formParam("grant_type","password")
                .formParam("client_id",clintID)
                .formParam("client_secret",clintSecret)
                .formParam("username","ravi.ahuja@bionic.co.uk.staging")
                .formParam("password",password)
                .post("https://test.salesforce.com/services/oauth2/token");
        //System.out.println(response.jsonPath().prettify());
        String token = response.jsonPath().get("access_token");

        return token;
    }
}
