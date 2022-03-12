// 1ta array er moddhe thaka prottek ta value k double kore onno ekta array te show korar jonno map.js er bebohar kora hoy.....

// ------without map.js-------


const numbers = [2,4,6,8];

const output = [];

for(number of numbers){
    const result = number * 2;
    output.push(result);
}

console.log(output)


// --------map with function-----------


const newNumbers = [10,12,14,16];


const doutbleIt = newNumber => newNumber * 2;


const output2 =newNumbers.map(doutbleIt);

console.log(output2)





const testNumber = [10,12,14,16,18];

const testMap = putNumber => putNumber * 2;

const myResult = testNumber.map(testMap);

console.log(myResult);


// find square number with map.js

const inSquare = [3,4,5,6];

const squareFunction = squre => squre * squre;

const squreOutput = inSquare.map(squareFunction);

console.log(squreOutput)