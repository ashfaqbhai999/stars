var student = {
    name: 'Rajan',
    age: 23,
    course: 'Engg',
    courseCompleted: true,
    address: {
        city: 'Hyderabad',
        state: "TS"
    }
};
function printStudent(student) {
    console.log(JSON.stringify(student));
}
printStudent(student);
