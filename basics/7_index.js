/*
len = 0;
bre = 0;

console.log(Math.abs(len) * Math.abs(bre))

var call = a => a * 10;
console.log(call(8));
console.log(Math.trunc(4065.89*3))
*/

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