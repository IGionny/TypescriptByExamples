// reference syntax works only with tsc outfile to have only 1 file in output
// it's not necessary to declare it, BUT we have to include this dependecy by hand!
/// <reference path="./MyLib/MyLib.ts" />

//THIS import is NOT like the MODULE import but it is only an ALIAS definition
import Maths = MyLib.Math;
console.log("-1 is positive?", MyLib.Math.IsPositive(-1))
console.log("-1 is positive?", Maths.IsPositive(-1))