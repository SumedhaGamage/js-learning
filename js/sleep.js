console.log('Starting the script');
print('in second line')
sleep1000('first')
console.log('end of the script');
var num = 2 + 5;
console.log(num *2);
sleep3000()
sleep(); //2000


function print(params) {
    console.log(params);   
}

function sleep(){
    setTimeout( () => {
        console.log('in sleep for 2000');
    }, 2000);
}
function sleep3000(){
    setTimeout( () => {
        console.log('in sleep for 3000');
    }, 3000);
}

function sleep1000(param){
    setTimeout( () => {
        console.log('in sleep for 1000 ' , param);
    }, 1000);
}