/*
//session 9
//forEach example
const nums = [1,2,3,4];
nums.forEach(
  function iterate(value) {
    console.log(value);
  }
);
//OR
nums.forEach((value) => console.log(value));

nums.forEach((value, index) => console.log(value + " is value at index " + index));

//find example
const data = [
  {_id: "1", name: "Vivek"},
  {_id: "2", name: "Neha"},
  {_id: "3", name: "Satya"},
  {_id: "4", name: "Amit"},
];
const result = data.find((item) => item._id === "1");
console.log(result);

//sorting
var arr = ["Xavi", "Zaltan", "Messi", "Aguero"];
arr.sort();
console.log(arr);

const nums = [4, 20, 12, 11, 100, 0, 4];
//ascending sort
nums.sort((a,b) => a - b);
console.log(nums);
//descending sort
nums.sort((a,b) => b - a);
console.log(nums);

//map example
let arr = [1, 2, 3];
let cicleRadii = arr.map((item) => Math.PI * item * item)
console.log(cicleRadii)

//filter() example
const fruits = ["apple", "banana", "grapes", "kiwi", "orange"];
const newArr = fruits.filter((str) => str.length > 5);
console.log(newArr)

//search for a key in an array
function search(arr, key) {
  // You only need to implement this function.
  console.log(typeof(key))
  let result = false;
  arr.forEach((value) => {
    if (value === key) {
      result = true;
    }
  });
  return result;
}
var result = search([1, 2, 3, 4], 3)
console.log(result)

var arr = ['abc', 'pqr', 'banana']
function sort(arr) {
  // You only need to implement this function.
  arr.sort();
}
let result = sort(arr)
console.log(result)

function getFullName(obj) {
  // You only need to implement this function.
  console.log(obj)
  let newNames = obj.map(combineNames);
  console.log(newNames)
  return newNames;
}

function combineNames(row) {
  return row.firstname + " " + row.lastname;
}

let result = getFullName([
    { firstname: "Robert", lastname: "Obrain" },
    { firstname: "Kevin", lastname: "Hart" },
    { firstname: "Dane", lastname: "Cobby" }
  ]
)
console.log(result)

let names = ["Ravi", "Pulkit", "Kiran", "Aagam"];
console.log(names);
function remove(names, startIndex, deleteCount) {
  // You only need to implement this function.
  return names.splice(startIndex, deleteCount);
  //return newArr;
}

let newArr = remove(names, 2, 2);
console.log(names);
console.log(newArr)
*/


//session 8
function greet(){
    return function() {
        console.log('Inner function');
    }
}
const returnVal = greet();
returnVal();

//callback example
function display(sum) {
  console.log(sum)
}
function calculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}
calculator(5, 5, display);

//Closure example
function parentFunction() {
    //Lexical scope of child function start
    const message = "Hi! Parent function message";
    function childFunction() {
      console.log(message);
    }
    return childFunction;
  }
const ans = parentFunction();
ans();



/*
//session 7
len = 0;
bre = 0;

console.log(Math.abs(len) * Math.abs(bre))

var call = a => a * 10;
console.log(call(8));
console.log(Math.trunc(4065.89*3))


function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
  }
  
var a = 10;
var b = 20;
swap(a, b);
console.log(a);
console.log(b);

*/

/*
//session 6
let a,b,rest;
[a,b,...rest] = [10,20,30,40,50]

console.log(rest)


let ob = {name: "Crio", location: "Bengaluru"};
let arr = [1,2,3]

console.log(typeof(ob))
console.log(Array.isArray(arr))

var x = 2;
var y = "2";
console.log(x===y);
*/

/*
//session 5
// var arr = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i'];
// const stringFromParts = arr.join("");
// console.log(stringFromParts)

/* let str = "I live in India";
str = str.split(" ")
newstr = str.sort()

console.log(newstr) 
str = "a" + "b";
console.log(str);

let arr = [];
arr.push(0);
console.log(arr);

obj = { firstName: 'Sachin', middleName: 'Ramesh', lastName:'Tendulkar'}
sample = "middleName"
delete obj.sample;
console.log(obj)

console.log(typeof(obj.firstName))
*/

/*
session 3
//--------for loop----------

// for(let i = 0; i < 10; i ++) {
//   console.log(i)
// }

// for (let i = 2; i <= 100; i++) {
//   console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//   if(i >= 1 && i <=50 && i % 2 !== 0) {
//     console.log(i)
//   }
//   else if (i >=51 && i <= 100 && i % 2 === 0)
//   {
//     console.log(i)
//   }
// }

for (;;) 
{
  console.log("something random")
}
*/

/*
//session 2
console.log((100 + 50) * 2 - 50 / 10 + (20 - 10));

//150*2 -50 /10 + (20-10)
//150*2 -50 /10 + 10
//150*2 -50 /10 + 10
//150*2 -5 + 10
//300 -5 + 10
//300+5=305

//In JS + operator have two jobs
//1st-addition for digits
//2nd  concatenation for non digits


console.log(2 + 2)//4
console.log(5 * 15)//75
console.log(10 % 2)//0
console.log(19 - 29)//-10
console.log('Java' + 'Script')//JavaScript
console.log('JS' / 4)//NAN (not-a-number)
console.log(3 + 10 * 2);//23
console.log((3 + 10) * 2);//26

console.log(20 > 10)
console.log(0 >= 10)
console.log(0 <= 10) //true because checks for 0<10 or 0=10 (former is true)

console.log(10 >= 10)

if ((!!true))
  {
    console.log("If block");
  }
else
{
  console.log("Else block");
}
*/

/*
//session 1
console.log("Hello from Crio"); //console is a namespace or folder
console.log('Hi from Pooja');
console.log(12345678);

console.log(true);
console.log(false);

console.log(null);

console.log(typeof("234jd"));
console.log(typeof(12));
console.log(typeof(true));
console.log(typeof(null));

var name = "CRIO";
var batch = "JS-1-B2"
var age = 27
var DiceValue = null;
var Score;

console.log("Hello from Pooja");
console.log("Pooja is mentee for JS-1-B2");
console.log("Pooja knows little bit of HTML, CSS and JS");
console.log("Pooja loves dance");

console.log(Score);
Score = 80;
console.log(Score);
Score = 82;
//Re-assignment

//const number = 10;
//number = "hello";
//console.log(number);


console.log(typeof (typeof (1234)))

// avoid reassignment of code- bad practice

var num = 10;
console.log(num);
var num = 100;
console.log(num);

//var allows redeclaration

let num1 = 10;
console.log(num1);
*/
