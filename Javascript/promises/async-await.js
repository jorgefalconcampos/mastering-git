
// async function functionWithPromise(){
//     let miProm = new Promise(resolve => {
//         resolve("Promise with await");
//     });

//     console.log(await miProm);
// }

// functionWithPromise();


async function functionPromiseAwaitTimeout(){
    console.log("Function begins");
    let miPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolving promise with await & timeout");
        }, 4000);
    });

    console.log(await miPromise);
    console.log("Function ends");
}

functionPromiseAwaitTimeout();









