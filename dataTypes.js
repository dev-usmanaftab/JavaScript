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

var Str = String(num1);
console.log( Str );
console.log( typeof(Str) );

var Num = Number("200")
console.log(Num);
console.log(typeof(Num));

/*------------------------------------------------------*/

