/*
After a test suite runs, you receive an array of test results 
(strings: "pass", "fail", "skip"). Write a JavaScript program using a for 
loop that counts how many tests passed, failed, and were skipped. Print a test report
 with total tests, counts, pass rate percentage, and a verdict 
 (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
*/ 
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount=0;
let failCount=0;
let skipCount=0;

for(let i=0;i<testResults.length;i++)
    if(testResults[i]=="pass") passCount++;
else if(testResults[i]=="fail") failCount++;
else skipCount++;

console.log("total testcase are ",testResults.length );
console.log("no of passed ",passCount)
console.log(" no of failed ",failCount)
 console.log("number of skipped ",skipCount);

 if(passCount==testResults.length)
     console.log("ready for release")
    else if(failCount>=2)
    console.log("failures block release")
    else if(failCount<=2)
    console.log("review")