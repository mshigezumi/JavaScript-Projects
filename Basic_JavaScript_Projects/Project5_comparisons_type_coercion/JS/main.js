// using writeln() instead of write() so it's actually readable
document.writeln(typeof "hi"); // outputs string

document.writeln(0/0) // outputs NaN (not a number)
document.writeln(isNaN("hi")) // outputs true
document.writeln(isNaN(1)) // outputs false
document.writeln(2E310) // outputs Infinity
document.writeln(-2E310) // outputs -Infinity
document.writeln("1-" + 5); // outputs 1-5

console.log(2+2); // outputs 4 in the console
console.log(2==1); // outputs false in the console

document.writeln(2>1) // outputs true
document.writeln(2<1) // outputs false
document.writeln(2==2); // outputs true
document.writeln(2==1); // outputs false

document.writeln(2===2); // outputs true
document.writeln(2==="1"); // outputs false
document.writeln(2==="2"); // outputs false
document.writeln(2===1); // outputs false

document.writeln(true && true); // outputs true
document.writeln(true && false); // outputs false
document.writeln(true || false); // outputs true
document.writeln(false || false); // outputs false

document.writeln(!false); // outputs true
document.writeln(!true); // outputs false