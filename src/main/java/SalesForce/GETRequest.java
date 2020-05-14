package SalesForce;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class GETRequest {

    public String salesforceGET(String token, String endpoint) {
        String baseURL = "https://bionicserviceslimited--staging.my.salesforce.com";
        String version = "v48.0";
        Response response2 =  RestAssured
                .given()
                .auth()
                .oauth2(token)
                .get(baseURL+"/services/data/"+version+"/sobjects/Contract/8003O000001NEPOQA4");

        //System.out.println("Status Code "+response2.getStatusCode());
        //System.out.println("Code "+response2.getBody().asString());
        //System.out.println("ID is "+response2.jsonPath().get("attributes"));
        return response2.getBody().asString();
    }
}
