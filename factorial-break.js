let i = 1;
let factorial = 1;
let num = 10;

while(true){
    if(i > num){
        break;
    }
    factorial = factorial * i;
    i++;
};
console.log(factorial);