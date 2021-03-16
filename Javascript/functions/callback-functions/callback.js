function print(msg){
    console.log(`Console > ${msg}`);
}

function addition(op1, op2, cBack){
    let res = op1 + op2;
    cBack(`Resultado: ${res}`);
}

addition(5, 4, print);