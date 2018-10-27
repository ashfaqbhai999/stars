/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
for (var i = 0; i <= 10; i++) {
}
console.log(i); // we can access the 'i' value outside the for loop with 'var'
for (var j = 0; j <= 10; j++) {
}
// console.log(j); // We cannot access with 'let'
/* ---------------------------------------------------------------------------- */
// Usage of let vs var inside if block
var course = 'MPC';
if (course === 'MPC') {
    var dept1 = 'Engineering';
    var dept2 = 'Medical';
}
console.log(dept1); // Engineering
//console.log(dept2); // We cannot Access this
/* ---------------------------------------------------------------------------- */
// Usage Const variable creation
var APP_NAME = 'JS App';
// we cannot re-assign becoz it is read-only
// APP_NAME = 'CSS APP';
