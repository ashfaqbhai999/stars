/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
var employee = {
    name: 'John',
    age: 40,
    designation: 'Manager'
};
var strConcat = "<div style='background-color: orange'>" +
    "<h3> Name : " + employee.name + "</h3>" +
    "<h3> Age : " + employee.age + "</h3>" +
    "<h3> Desg : " + employee.designation + "</h3>" +
    "</div>";
document.querySelector('#container').innerHTML = strConcat;
var templateStr = "<div style=\"background-color: lightcoral\">\n                              <h3>Name : " + employee.name + " </h3>\n                              <h3>Age : " + employee.age + "</h3>\n                              <h3>Desg : " + employee.designation + "</h3>\n                          </div>";
document.querySelector('#container').innerHTML = templateStr;
