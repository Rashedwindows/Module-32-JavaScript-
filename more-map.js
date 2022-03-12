// ekta array er moddhe thaka prottek ta items er word length ber korar jonn map() use kora

const friends = ['Tom Hanks', 'Tom Cruikise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend =>friend.length);

// console.log(fLengths)



// print to target items in objects in array with map

const products = [
    {name : 'water bottle', price : 50, color : 'yellow'},
    {name : 'mobile phone', price : 15000, color : 'black'},
    {name : 'smart watch', price : 3000, color : 'black'},
    {name : 'sticky notes', price : 30, color : 'pink'},
    {name : 'water glass', price : 3, color : 'white'}

]

const productNames = products.map(product => product.name);

console.log(productNames)