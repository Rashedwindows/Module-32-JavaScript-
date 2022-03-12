// filter hocche nidirsto ekta shorto onujaiyi kaj kore

const numbers = [2,18,32,45,63,29,57,71,92,88,3,8,5,4,7,10,12,19,15];

const bigNumbers = numbers.filter(number => number > 50 );
const smallNumbers = numbers.filter(number => number < 20)

// console.log(smallNumbers)


const products = [
    {name : 'water bottle', price : 50, color : 'yellow'},
    {name : 'mobile phone', price : 15000, color : 'black'},
    {name : 'smart watch', price : 3000, color : 'black'},
    {name : 'sticky notes', price : 30, color : 'pink'},
    {name : 'water glass', price : 3, color : 'white'}

]

const productCheapesPrice = products.filter(product => product.price < 2000);


// uporer items gular moddhe jeisob item er color black seigula ber kora
const productColor = products.filter(product => product.color == 'black');

// console.log(productCheapesPrice)

console.log(productColor)