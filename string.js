let stringLiterals = 'primitive String'
let stringObject = new String(stringLiterals)


console.log(typeof stringLiterals) // Logs "string"
console.log(typeof stringObject)  // Logs "object"
console.log(stringLiterals==stringObject)

var twoNumber = "10 + 10";
console.log("eval funtion result :::"+eval(twoNumber));
var twoNumberUsingObject = new String("10 + 10");
console.log(eval(twoNumberUsingObject));
console.log(eval(twoNumberUsingObject.valueOf()))

var s1="hbbfvbvfjdff"+"vvdvhvbhbfvhva"+" bhvbdhbvbvvv";

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."

let a = 'a'
let b = 'b'
if (a < b) { // true
console.log(a + ' is less than ' + b)
} else if (a > b) {
console.log(a + ' is greater than ' + b)
} else {
console.log(a + ' and ' + b + ' are equal.')
}


let text = "hello sandeep";
console.log(text.charCodeAt(4)) ;
console.log(text.charAt(0)) ;
console.log(text.slice(2,5))
console.log(text.toUpperCase())
console.log(text)
let upperCase=text.toUpperCase()
let textObject = new String("hello sandeep");
let upperCaseObject=textObject.toUpperCase();
console.log(upperCaseObject)


function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} 

function isEqualW(str1, str2){
    return str1==str2;
}








