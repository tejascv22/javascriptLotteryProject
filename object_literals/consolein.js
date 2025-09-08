let student = {
    name: 'tejas',
    phone : 808844545,
    address : 'kolar ,karnataka',

};

console.log(student)

console.log(`${student.name} is from ${student.address}`)

// how to update the value 

student.phone = 9845315913
console.log(student.phone)
// adding new property using dot operator

student.gender = 'male';
console.log(student.gender)-

// delete the property in student

delete student.gender;
console.log(student.gender)