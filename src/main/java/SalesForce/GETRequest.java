package SalesForce;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class GETRequest {

    public String salesforceGET(String token, String salesforceObject ,String queryString) {
        String baseURL = "https://bionicserviceslimited--staging.my.salesforce.com";
        String version = "v48.0";
        String query = "select id from "+salesforceObject+" where Company = '"+queryString+"'";
        Response response2 =  RestAssured
                .given()
                .auth()
                .oauth2(token)
                .get(baseURL+"/services/data/"+version+"/query?q="+query);

        return response2.getBody().asString();
    }
}
