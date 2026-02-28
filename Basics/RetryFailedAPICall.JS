/*
In automation testing, API calls sometimes fail due to network issues. 
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. Simulate random success/failure using Math.random()
 (40% chance of success: randomValue > 0.6).
  Log each attempt and print the final result.
*/ 

let maxRetries = 5;
let attempt = 0;
let isSuccess = false;

do {
    attempt++;
    console.log("Attempt " + attempt + ": Calling API...");

    // Simulate API response (40% success rate)
    let randomValue = Math.random();

    if (randomValue > 0.6) {
        isSuccess = true;
        console.log("API call succeeded!");
    } else {
        console.log("API call failed. Retrying...");
    }

} while (!isSuccess && attempt < maxRetries);

// Final Result
if (isSuccess) {
    console.log("Final Result: Success after " + attempt + " attempt(s).");
} else {
    console.log("Final Result: Failed after " + maxRetries + " attempts.");
}