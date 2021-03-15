"use strict";


try{
    // since we're using strict mode, the x variable statement will result on an error
    x = 10;
}
catch(err){
    console.log(error);
    // console.error(err);
}
finally{
    console.log("Wether fails or not, this will be executed");
}