/*
As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, 
and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
*/ 
let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500;

let i = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let breachCount = 0;

while (i < responseTimes.length) {
    let currentTime = responseTimes[i];

    if (currentTime < min) {
        min = currentTime;
    }

    if (currentTime > max) {
        max = currentTime;
    }

    sum += currentTime;

    if (currentTime > SLA_LIMIT) {
        breachCount++;
    }

    i++;
}


let average = sum / responseTimes.length;

console.log("Performance Report:");
console.log("Minimum Response Time: " + min + " ms");
console.log("Maximum Response Time: " + max + " ms");
console.log("Average Response Time: " + average.toFixed(2) + " ms");
console.log("SLA Breaches (> " + SLA_LIMIT + " ms): " + breachCount);