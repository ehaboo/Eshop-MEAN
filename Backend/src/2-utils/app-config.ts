// import dotenv from "dotenv"
// dotenv.config()


class AppConfig {
    public salesEmail = "sales@sales.com"; 
    public helpPage = "http://sales.com/help"; 
}

class DevelopmentAppConfig extends AppConfig {
    public isDevelopment = true;
    public isProduction = false; 
    public port = 4000;
    public serverUrl = "http://localhost:" + this.port;

    // public port = process.env.SERVER_PORT;

    // public pgHost = process.env.PG_HOST;
    // public pgDataBase = process.env.PG_DATABASE;
    // public pgUser = process.env.PG_USER;
    // public pgPassword = process.env.PG_PASSWORD;
    // public pgPort = process.env.PG_PORT;


    public pgHost = "localhost";
    public pgDataBase = "eshop";
    public pgUser = "postgres";
    public pgPassword = "e2039N";
    public pgPort = 5432;
}

class ProductionAppConfig extends AppConfig {
    public isDevelopment = false;
    public isProduction = true; 
    public port = "";
    public serverUrl = "http://.....:" + this.port;

    public pgHost = "";
    public pgDataBase = "";
    public pgUser = "";
    public pgPassword = "";
    public pgPort = "";

}



const appConfig = (process.env.NODE_ENV === "production") ? new ProductionAppConfig() : new DevelopmentAppConfig(); 
export default appConfig;