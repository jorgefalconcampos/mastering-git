let miPromise = new Promise((resolve, reject) => {
    let expression = false;
    if(expression){
        resolve("Resolved");
    }
    else{
        reject("Not resolved");
    }
});

miPromise.then(value => console.log(value), err => console.log(err));