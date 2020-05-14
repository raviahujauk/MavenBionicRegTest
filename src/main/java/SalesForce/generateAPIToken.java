package SalesForce;

import io.restassured.RestAssured;
import io.restassured.response.Response;

    public class generateAPIToken {

    public String generateToken() {

        String clintID = "3MVG90J3nJBMnqrRSYPfXX.ReRnyTWel_ga_1rXc8O3GBn_X4pCqEpsIWsoefUAmxMSWB5TomLBceWteQ2qDf";
        String clintSecret = "9172BA5F717A956DD1E0D4AEECAFF9AC31AE41CBF7640118E931451939693C82";
        String password = "Calmearth63tXAZB4FHXrdmAvE5bicCviSc";
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
