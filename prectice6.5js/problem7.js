// dublicate number 
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
function remove(data){
    return [...new Set(data)]
}
console.log(remove(numbers));