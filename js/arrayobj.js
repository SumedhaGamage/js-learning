
//************************************* */
var array = ['sumedha',3,true,false];
var obj = {
    firstname: 'Sumedha',
    lastname : 'gamage',
    address : {
        street : 'asdsd',
        zip: 77777
    },
    hobbies : ['asdasd','afadf']
}

// console.log(array);
// console.log(obj);


// console.log(JSON.stringify(obj));

var json = '{"bankname":"BOA","fundname":"abc","fundvalue": 2000000}'
let boa = JSON.parse(json);

// console.log(boa.bankname);

console.log(obj.hobbies);
console.log(obj.address.zip);
console.log(obj.hobbies[0]);
console.log('#######');

console.log(array[0]);
console.log(array[1]);




