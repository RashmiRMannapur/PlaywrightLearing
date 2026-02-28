/*
In CI/CD pipelines, tests run against different environments.
 Write a JavaScript program using a switch statement that takes an environment name stored 
 in a variable and prints the base URL,
API key pattern, and timeout. Use const for fixed values and let for the assembled config.
Environments: dev, staging, qa, production/prod. 
Each has different base URL, API key prefix, timeout, and description.*/
// Input
let envName = "staging";

const DEV_CONFIG = {
    baseURL: "https://dev.api.company.com",
    apiKeyPrefix: "DEV-KEY-",
    timeout: 3000,
    description: "Development Environment"
};

const STAGING_CONFIG = {
    baseURL: "https://staging.api.company.com",
    apiKeyPrefix: "STG-KEY-",
    timeout: 5000,
    description: "Staging Environment"
};

const QA_CONFIG = {
    baseURL: "https://qa.api.company.com",
    apiKeyPrefix: "QA-KEY-",
    timeout: 4000,
    description: "QA Testing Environment"
};

const PROD_CONFIG = {
    baseURL: "https://api.company.com",
    apiKeyPrefix: "PROD-KEY-",
    timeout: 8000,
    description: "Production Environment"
};

let config;

switch (envName) {
    case "dev":
        config = DEV_CONFIG;
        break;

    case "staging":
        config = STAGING_CONFIG;
        break;

    case "qa":
        config = QA_CONFIG;
        break;

    case "production":
    case "prod":
        config = PROD_CONFIG;
        break;

    default:
        console.log("Invalid environment name!");
        config = null;
}

if (config !== null) {
    console.log("Environment:", envName);
    console.log("Description:", config.description);
    console.log("Base URL:", config.baseURL);
    console.log("API Key Pattern:", config.apiKeyPrefix + "XXXXX");
    console.log("Timeout:", config.timeout + " ms");
}
