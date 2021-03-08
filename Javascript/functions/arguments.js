let resultado = addition(5, 8, 2, 3, 2);
console.log(resultado);

function addition(){
    let r = 0;
    for(let i=0; i<arguments.length; i++){
        r += arguments[i];
    }
    return r;
}