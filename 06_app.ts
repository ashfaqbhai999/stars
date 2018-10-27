/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
let languages:Array<string> = ['HTML','CSS','JavaScript','Bootstrap'];

// Usage of for...in loop from ES5
let output = '';
for(let index in languages){
    let value = languages[index];
    output += ` ${value} , `;
}
console.log(output);

// Usage of for...of loop from ES6
output = '';
for(let value of languages){
    output += ` ${value} - `;
}
console.log(output);