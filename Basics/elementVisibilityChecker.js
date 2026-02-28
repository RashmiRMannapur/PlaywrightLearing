/*
In UI automation (Cypress/Playwright), you often need to validate element states before 
interacting with them. Write a JavaScript program that checks an element's properties 
(isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality
 (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), 
HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
*/

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let state = "";
let action = "";

// Determine State
if (isPresent === false) {
    state = "NOT FOUND";
} else if (isPresent === true && isDisplayed === false) {
    state = "HIDDEN";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    state = "DISABLED";
} else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
}

// Determine Severity using ternary operator
let severity = (isPresent === false)
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
        ? "WARNING"
        : "OK";

// Suggested Action
if (state === "READY") {
    action = "Proceed with interaction.";
} else if (state === "DISABLED") {
    action = "Wait or check why the element is disabled.";
} else if (state === "HIDDEN") {
    action = "Verify visibility conditions or wait until visible.";
} else {
    action = "Check locator or application state immediately.";
}

// Output
console.log("Element State: " + state);
console.log("Severity Level: " + severity);
console.log("Recommended Action: " + action);