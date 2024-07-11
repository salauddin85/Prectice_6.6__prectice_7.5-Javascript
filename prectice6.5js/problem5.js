let d3 = []
let d5 = []
for(let i= 1;i<=50;i++)
    { 
        if(i%3==0) {

            d3.push(i);
        }
        else if (i%5==0){
            d5.push(i);
        }    
       
    }
console.log("divaided by 3 number are",d3);
console.log("divaided by 5 number are",d5);