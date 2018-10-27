// Create a Student Interface , and printStudent function
interface Student {
    name : string,
    age : number,
    course : string,
    courseCompleted : boolean
    address : {
        city : string,
        state : string
    }
}

let student:Student = {
    name : 'Rajan',
    age : 23,
    course : 'Engg',
    courseCompleted : true,
    address : {
        city : 'Hyderabad',
        state : "TS"
    }
};

function printStudent(student:Student){
    console.log(JSON.stringify(student));
}
printStudent(student);