"use strict";
/// <reference path="./MyLib/MyLib.ts" />
//THIS import is NOT like the MODULE import but it is only an ALIAS definition
var Maths = MyLib.Math;
console.log("-1 is positive?", MyLib.Math.IsPositive(-1));
console.log("-1 is positive?", Maths.IsPositive(-1));
