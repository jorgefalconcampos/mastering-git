const phones = ['iPhone', 'Galaxy', 'Huawei', 'Xiaomi'];

for (let i=0; i<phones.length; i++){
    console.log(phones[i])
}

console.log(phones[2]); // output: Huawei



phones[phones.length] = "ZTE"; // adds an element in last position
// phones.push('ZTE'); // do the same as previous line

for (let i=0; i<phones.length; i++){
    console.log(phones[i])
}


console.log(Array.isArray(phones)); // if 'phones' var is an array, returns true
console.log(phones instanceof Array); // do the same as previous line