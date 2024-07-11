
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}


let inputNumber = prompt("Enter a number:"); // Taking input from user
inputNumber = parseInt(inputNumber); // Convert input to an integer
checkEvenOrOdd(inputNumber);