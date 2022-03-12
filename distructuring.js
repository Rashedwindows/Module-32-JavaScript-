const fish = {id: 12, name:'Hilsha', price: 9000, phone:'01785556985', address:'chandpur', dress: 'silver'};

// const address = fish.address;

// console.log(address)


// all object add

const{name,phone,dress} = fish;

// console.log(name,phone,dress)
// console.log(name,phone)


const company = {
    id:1,
    companyName : 'GP',
    ceo:{ ceoName : 'Arif',food : 'fuchka',address : 'Dhaka'},
    web :{ work : 'web development', employee : 22, framework : 'react',
    },

};

const {ceoName,address} = company.ceo;

const{id} = company;

const{work,framework}= company.web;

const {ceo} = company;
// console.log(ceoName,address)

const {companyName} = company

console.log(companyName)


