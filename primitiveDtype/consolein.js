let age = 30;
let percentage = 90.66;
console.log(typeof age);
// we can assign maxim value in number datatype is 9007199254740991
// 2^53-1==that number
let marks = 9007199254740991; // maximum safe number
console.log(marks);
console.log(typeof marks);
marks = marks + 1;
console.log(marks);
console.log(typeof marks);
marks = marks + 2;
console.log(marks); // it can increment even numbers
console.log(typeof marks);
/* where we store in 64 bit in system so that 
 1 bit== sign bit( store for negative numer)
 11 bits== exponent
 53 bits == fraction(manstissa)
 this how the number is stored */

a = 0 / 0;
console.log(a);
console.log(typeof a);

// big int
let number = 9007199254740991n;
number = number + 1n;
console.log(number);
console.log(typeof number);

number = BigInt("100");
console.log(number);
console.log(typeof number);

// lets learn about boolean datatype
let isbook = true;
console.log(isbook);
console.log(typeof isbook);

if (isbook) {
  console.log("yes it is true");
}

// string

let name = "harry"; // the data type is string
let name1 = new String("harry"); // this is object

// string build in methods
console.log(name.length);
console.log(name.toUpperCase());

// undefined datatype
let undef;
console.log(typeof undef); // print undefined //console.groupCollapsed(undef); // print undefined

undef = 90;
console.log(undef);
undef = undefined; //dont do this it is javascript engine job now ours
console.log(undef);

//  null datatype
let nullvar = null;
console.log(nullvar);
console.log(typeof nullvar); // it is object but it should be null this is bug in javascript it show object

// symbol datatype
let sym1 = Symbol("this is symbol");
console.log(sym1);
console.log(sym1.description);
console.log(typeof sym1);