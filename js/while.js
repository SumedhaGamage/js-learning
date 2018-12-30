/*
var int =0;
while (int < 10) {
    console.log(int, 'in loop');
    int++;
}

console.log(int, 'after the while');
*/

/*
while loop with sleep
*/

var int =0;
while (int < 10) {
    sleep(int);
    int++;
}

console.log(int, 'after the while');

function sleep(param) {
    setTimeout(() => {
        console.log(param, 'in loop');
    },1000);
}
