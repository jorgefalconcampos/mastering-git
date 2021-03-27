
let promise = new Promise((resolve) => {
    setTimeout( () => {
        resolve("This is being resolved");
    }, 3000);
})

promise.then(val => {
    console.log(`Promise: ${val}`);
});