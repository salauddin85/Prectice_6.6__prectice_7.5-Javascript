

let marks = prompt("Enter a number:"); // Taking input from user
marks= parseInt(marks); // Convert input to an integer


if (marks >= 80 && marks <= 100) {
    console.log("Congretulations")
    console.log("A+");
}
else if (marks >= 70 && marks <= 79) {
    console.log("A");
}
else if (marks >= 60 && marks <= 69) {
    console.log("A-");
}
else if (marks >= 50 && marks <= 59) {
    console.log("B");
}
else if (marks >= 40 && marks <= 49) {
    console.log("C");
}
else if (marks >= 33 && marks <= 39) {
    console.log("D");
}
else{
    
    console.log(" sorry Fail!");
    console.log("Again restart");
}