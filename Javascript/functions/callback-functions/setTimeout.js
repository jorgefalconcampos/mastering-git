function print(msg){
    console.log(`Console > ${msg}`);
}

function addition(op1, op2, cBack){
    let res = op1 + op2;
    cBack(`Resultado: ${res}`);
}

addition(5, 4, print);

// Async calls with setTimeout

function callbackFunction(){
    console.log("This messages is displayed after 3 seconds");
}

setTimeout(callbackFunction, 3000);