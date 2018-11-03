"use strict";
/* THIS is NOT a module because does not use 'export' keyword */
var MyLib;
(function (MyLib) {
    //Here we use export to export the sub-namespace, but it does not have any effect to the module system because we are not in the top-level!
    var Math;
    (function (Math) {
        function IsPositive(value) {
            return value > -1;
        }
        Math.IsPositive = IsPositive;
        //this function is not marked with export: it cannot be used outside of MyLib.Math namespace!
        function AprivateFunction() {
        }
    })(Math = MyLib.Math || (MyLib.Math = {}));
})(MyLib || (MyLib = {}));
