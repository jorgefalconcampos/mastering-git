let arrowFunction = () => {
    console.log("Arrow function");
}

// const greeting = () => {
//     return 'Hello from arrow function';
// }

const greeting = () => 'Hello from arrow function';

console.log(greeting());

const greetingWithParams = (msg) => console.log(`The message is ${msg}`);

// if only 1 parameter is received, we can ommit the parentheses
const greetingWithParams2 = msg => console.log(`The message is ${msg}`);