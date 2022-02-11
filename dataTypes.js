/* Var is used to declare those variable which we want to use in whole program.
   Let is used to declare those variable which we want to use in a Specific Scope.
   Const is used to declare those variable which will remain Constant in whole program. 
*/

// Data Types: Null, Undefined, Boolean, Number, BigInt, String, Object, Symbol. 

const pi = 3.14;
var num1 = 10;
let num2 = 20;
var num3 = 1000n;   //BigInt
var isEven = true;
var myName = "Usman Aftab";
var emptyVariable  = null;
var unInitialized  = undefined;

/*------------------------------------------------------*/

console.log(myName);
console.log( typeof(myName) );

/*------------------------------------------------------*/

var Str = String(num1);
console.log( Str );
console.log( typeof(Str) );

/*------------------------------------------------------*/

var Num = Number("200")
console.log(Num);
console.log(typeof(Num));

/*------------------------------------------------------*/

var str1 = "250 hello world";
var covToInt = parseInt(str1);
console.log( covToInt );
console.log( typeof(covToInt) );

/*------------------------------------------------------*/

var str2 = "25.35hello";
var conToFloat = parseFloat(str2);
console.log(conToFloat);
console.log( typeof(conToFloat) );

/*------------------------------------------------------*/

var billion1 = 1000000000;
var billion2 = 1_000_000_000;
var billion3 = 1e9;
var micro1 = 0.0000001;
var micro2 = 1e-6;
var milli = 1e-3;

console.log(billion1);
console.log(billion2);
console.log(billion3);
console.log(micro1);
console.log(micro2);
console.log(milli);

/*------------------------------------------------------*/


