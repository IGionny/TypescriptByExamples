"use strict";
//A namespace doesn't need to be imported, neither the relative d.ts definition
//Note: tsc will search the definition in a d.ts file under a type folder specified in tsconfig.json
//(typeRoots option)
console.log("-1 is positive?", MyLib.Math.IsPositive(-1));
