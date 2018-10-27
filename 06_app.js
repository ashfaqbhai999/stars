/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
var languages = ['HTML', 'CSS', 'JavaScript', 'Bootstrap'];
// Usage of for...in loop from ES5
var output = '';
for (var index in languages) {
    var value = languages[index];
    output += " " + value + " , ";
}
console.log(output);
// Usage of for...of loop from ES6
output = '';
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var value = languages_1[_i];
    output += " " + value + " - ";
}
console.log(output);
