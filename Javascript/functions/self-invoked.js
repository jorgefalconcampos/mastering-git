// This kind of functions are invoked and executed only once

(function (a, b) {
    const r = a + b; // note the use of a 'const' variable type, since it won't never be asigned again or change its value
    console.log("Result: " + r);
})(13, 3);