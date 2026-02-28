/*
Write a JavaScript program that simulates a login system with brute-force detection. 
The system should lock the account after 3 consecutive failed attempts.
 Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables),
 and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).
*/ 

var failedAttempts = 0;

const VALID_EMAIL = "abc@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

// Simulated login attempts
// [email, password]
const attempts = [
    ["wrong", "wrong"],
    ["wrong", "wrong"],
    ["wrong", "wrong"],
    ["admin@testingacademy.com", "Test@1234"]
];

let i = 0;
let accountLocked = false;

do {
    let email = attempts[i][0];
    let password = attempts[i][1];

    console.log("Attempt " + (i + 1) + ": Trying to login...");

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        console.log("Login Successful!");
        failedAttempts = 0;
        break;
    } else {
        failedAttempts++;
        console.log("Login Failed!");

        if (failedAttempts === MAX_ATTEMPTS) {
            accountLocked = true;
            console.log("Account Locked due to 3 consecutive failed attempts!");
            break;
        }
    }

    i++;

} while (i < attempts.length);

if (accountLocked === true) {
    console.log("Final Status: ACCOUNT LOCKED");
} else if (failedAttempts < MAX_ATTEMPTS) {
    console.log("Final Status: LOGIN PROCESS ENDED");
}