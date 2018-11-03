"use strict";
var MyLib;
(function (MyLib) {
    var Math;
    (function (Math) {
        function IsPositive(value) {
            return value > -1;
        }
        Math.IsPositive = IsPositive;
    })(Math = MyLib.Math || (MyLib.Math = {}));
})(MyLib || (MyLib = {}));
