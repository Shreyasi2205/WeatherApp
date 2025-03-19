// :x: BAD PRACTICE: Using var instead of let/const (Code Smell)
var username = "admin";
var password = "12345"; // :x: Security issue: Hardcoded credentials
// :x: BAD PRACTICE: Nested loops instead of a Set (Performance issue)
function findDuplicates(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                console.log("Duplicate found: " + arr[i]);
            }
        }
    }
}
// :x: BAD PRACTICE: Long function with high complexity (Refactoring needed)
function processData(data) {
    if (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] % 2 === 0) {
                console.log("Even: " + data[i]);
            } else {
                console.log("Odd: " + data[i]);
            }
            if (data[i] > 100) {
                console.log("Large number: " + data[i]);
            }
        }
    } else {
        console.log("No data provided");
    }
}
// :x: BAD PRACTICE: Using eval (Security risk)
var userInput = "console.log('Hacked!')";
eval(userInput); // :x: SonarQube should flag this as a major security issue
// Run functions
findDuplicates([1, 2, 3, 4, 1, 2]);
processData([10, 15, 200, 5]);