// -------------decalre variable based on the name of an object property----------

const myObject = {x:23, y:12, z:28, a:32, b:42};

const {x,a} = myObject;

// console.log(x,a);


// -------------------distructuring in an array------------------


const [s,t] = [23,42];

// console.log(s,t)












const [best,faltu] = ['momotaj','poroshi'];

// console.log(best,faltu);





//------------------distructuring an object like array-------------


const {sky,color,soil,money} = {sky:'blue', soil:'mati',color:'brown', money:500};

// console.log(soil);



// --------chaining-----------


const company2 = {

    id : 22,

    ceo :{

        name : 'Arif' ,
        food : 'fuchka',
        address : 'chandpur',
    },

    web : {

        work : 'web development',
        employee : 22,
        framework :'react',
        tech :{

            first : 'html',
            second : 'css',
            third : 'javaScript',
        }

    },

    
}

console.log(company2.web.tech.third)