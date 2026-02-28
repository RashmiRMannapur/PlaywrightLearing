/*
As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop.
 Each user should have a unique ID (USR-0001 format), name, email, and role 
 (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). 
Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
*/

var globalUserCounter = 0;
const total_users = 8;
const roles = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 1; i <= total_users; i++) {

    globalUserCounter++;
    let userId = "USR-" + String(globalUserCounter).padStart(4, "0");

    let name = "User" + i;

    let email = name.toLowerCase() + "@testingacademy.com";
   
    let role = roles[(i - 1) % roles.length];
    let isActive = (i % 3 === 0) ? false : true;

    console.log("id: ", userId);
    console.log("name: ", name);
    console.log("email: ",email);
    console.log("role:",role);
    console.log("isActive:",isActive);
}