/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
/* An Array can be expanded as parameters using Spread operator */
var array = [10, 454, 54, 4478, 7, 8787, 7, 8, 797, 879, 7];
var min = Math.min.apply(Math, array);
console.log("Min Value : " + min);
/* Add array elements in between some other array */
var arr1 = [30, 40, 50];
var arr2 = [10, 20].concat(arr1, [60, 70, 80]);
console.log("Arr2 : " + arr2);
/* Create a copy of an array using Spread operator */
var lang1 = ['HTML', 'CSS', 'JavaScript', 'Bootstrap'];
var lang2 = lang1.slice(); // same as slice() function
console.log("Lang2 : " + lang2);
