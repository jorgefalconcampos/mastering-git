// for primitive types:
let x = 10;
function changeValue(a){
    a = 20;
    console.log(a);
}

changeValue(x);
console.log(x); // x is not modified, but it does inside the function


// for objects (pass-by reference):
const person = {
    name: 'Pepe',
    last_name: 'Perez'
}

function changeValueObj(p1){
    p1.name = 'Carlos';
    p1.last_name = 'Casillas';
}

changeValueObj(person);
console.log(person);