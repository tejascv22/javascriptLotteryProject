let student = {
    name : 'tejas',
    phone : 589746,
    address : {
        city :"palasa",
        district : "srikakulam",
    },
    // wish : function (){
    //     console.log("happy birthday");
    //     console.log("well done")
    // }
}

let student1 = {...student}
console.log(student1)
student1.name="shashi"
// console.log(student1.name)
// student1.address .city= "kolar, karnaka"
// console.log(student1.address)
console.log(student.address) // there is so problen where  both of the are showing same it is because -
// - in the memeory the address object is stored in another memeory location , -
//  - the memeory address location is stored in main object so that is the case
//  so that we use 1.lodash--library (or) 2. structure clone

// studcture clone -- but not clone the function (so i kept function in commend)

let student3 = structuredClone(student)
console.log(student3)
student3.address .city= "banglore, karnaka"
console.log(student3.address)
console.log(student.address) 