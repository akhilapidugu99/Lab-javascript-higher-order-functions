//Array slice()
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
console.log(foods.slice(1,4));

//Array splice()
const modifiedfood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
modifiedfood.splice(2,0,'noodles','icecream');
console.log(modifiedfood);

//Filter
const numberArray = [12,324,213,4,2,3,45,4234];
var len=numberArray.length;
//isEven()
function isEven(numberArray){
    return numberArray%2==0
}
//isPrime()
function isPrime(number){
    for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 2;
}
var even_number=numberArray.filter(isEven);
console.log("Even number",even_number);
var prime_number=numberArray.filter(isPrime);
console.log("Prime number",prime_number);

//Reject()
function nonPrime(numberArray){
    let res=[];
    for(var i=0;i<len;i++){
       if(!(isPrime(numberArray))){
        res.push(numberArray);
        return res;
        }
    }
}
var non_primes=numberArray.filter(nonPrime);
console.log("Non Prime numbers",non_primes);

//lambda()
console.log(numberArray.filter(number => {return number%2==0}));

//map()
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    return myArray**2;
}
console.log("SquaresofNumbers",myArray.map(findSquareOfNumbers));

//reduce()
const array=[2, 3, 5, 10];
console.log("Product",array.reduce(function multiply(accumulator,currentValue){
    return accumulator*currentValue;
}));