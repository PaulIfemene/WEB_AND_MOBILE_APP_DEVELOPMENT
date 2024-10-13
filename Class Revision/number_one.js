// Var: can be redeclared and reassigned
// Let: can be reassigned but not redeclared
// Const: cannot be reassigned or redeclared


// let: You can reassign a new value to a let variable without issue.
// const: You cannot reassign a new value to a const variable. Because this will result in an error.


// What will be the output of the following code? Explain your answer
var x = 10;
let y = 5;
const z = 3;

x = 20;
y = 15;
z = 7;

console.log(x, y, z);
// there would be a TypeError: Assignment to constant variable. Because Const: cannot be reassigned or redeclared

