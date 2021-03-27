"use strict";


try{
    // since we're using strict mode, the x variable statement will result on an error
    let x = 10;
    if (x > 5) throw 'Limit exceeded!!';
}
catch(err){
    console.log(err);
    // console.error(err);
}
finally{
    console.log("Wether fails or not, this will be executed");
}