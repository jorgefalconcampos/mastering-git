async function functionPromise(){
    return 'Hello with promises & async';
}

functionPromise().then(val => console.log(val));