function shahed(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        money = array[i];
        if (money > 3000) {
            money = money - money * 0.20;
        }
        sum = sum + money;
    }
    return sum;

}

let a = [900,2700,3400];
let b = 10000;

let num = parseInt(b);

if (typeof (a) != "array" && typeof (num) != "number") {
    console.log("Invalid input");
}
let result = shahed(a);
// console.log(result);

let savings = result - num;
if (savings >=0) {
    console.log("Total savings:", savings);
}
else if (savings < 0) {
    console.log("Earn more");
}

