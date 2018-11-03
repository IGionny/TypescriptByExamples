;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.MyLib = factory()
}(this, (function () {

//-----------------------------
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
//-----------------------------


return MyLib;
})));