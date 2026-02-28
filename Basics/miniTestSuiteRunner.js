/*
Build a mini test suite runner that executes test cases and generates a summary report. 
This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop,
do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, and comparison type 
(strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts,
 find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.
*/

var passCount = 0;
var failCount = 0;
var errorCount = 0;

const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Loose equality check", actual: "5", expected: 5, type: "looseEqual" },
    { name: "Type check number", actual: 100, expected: "number", type: "typeCheck" },
    { name: "Truthy boolean", actual: true, expected: null, type: "truthy" },
    { name: "Less than check", actual: 5, expected: 10, type: "lessThan" }
];

let results = []; 

for (let i = 0; i < testCases.length; i++) {

    const test = testCases[i];
    let result = "FAIL";
    let errorMessage = null;

    try {

        if (typeof test.name !== "string" || typeof test.type !== "string") {
           console.log("Invalid test definition");
        }

        switch (test.type) {

            case "strictEqual":
                result = (test.actual === test.expected) ? "PASS" : "FAIL";
                break;

            case "looseEqual":
                result = (test.actual == test.expected) ? "PASS" : "FAIL";
                break;

            case "typeCheck":
                result = (typeof test.actual === test.expected) ? "PASS" : "FAIL";
                break;

            case "truthy":
                result = (test.actual ? "PASS" : "FAIL");
                break;

            case "lessThan":
                result = (test.actual < test.expected) ? "PASS" : "FAIL";
                break;

            default:
                throw new Error("Unknown comparison type");
        }

        if (result === "PASS") {
            passCount++;
        } else {
            failCount++;
        }

    } catch (err) {
        errorCount++;
        result = "ERROR";
        errorMessage = err.message ?? "Unknown error";
    }

    results.push({
        name: test.name,
        status: result,
        error: errorMessage
    });
}

let consecutivePasses = 0;
let index = 0;

while (index < results.length && results[index].status === "PASS") {
    consecutivePasses++;
    index++;
}

let firstFailure = null;
let j = 0;

if (results.length > 0) {
    do {
        if (results[j].status === "FAIL" || results[j].status === "ERROR") {
            firstFailure = results[j].name;
            break;
        }
        j++;
    } while (j < results.length);
}

console.log("===== MINI TEST SUITE REPORT =====");
console.log("Total Tests:", testCases.length);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Consecutive Passes from Start:", consecutivePasses);
console.log("First Failure:", firstFailure ?? "None");
console.log("==================================");

for (let k = 0; k < results.length; k++) {
    console.log(
        (k + 1) + ". " + results[k].name +
        " --> " + results[k].status +
        (results[k].error !== null ? " | Error: " + results[k].error : "")
    );
}