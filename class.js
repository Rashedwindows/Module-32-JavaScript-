class support {

    name;
    designation = 'Support Web Dev';
    address = 'Bangladesh';

    // --------constructor function means dynamic to proparty value-------
    constructor(name,address){
        this.name = name;
        this.address=address;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

const aamir = new support('Amir Khan','Bangladesh');
const salman = new support('solaiman khan' ,'china');

aamir.startSession()
salman.startSession()

// console.log(aamir)
// console.log(salman)