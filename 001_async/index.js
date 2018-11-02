"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*
A function that build a Promise object that is resolved only after a ms seconds by the setTimeout
*/
var waitForMs = function (ms, message) { return new Promise(function (res) { return setTimeout(function () { return res(message); }, ms); }); };
function Call2() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitForMs(2000, "Yayii!")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function Call1() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Call2()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
console.log("Start");
Call1().then(function (val) { return console.log("Result Value:", val); });
/*Example of Promise with the specification of the Type that will be returned */
var typedPromise = new Promise(function (resolve, reject) { resolve('Hello'); });
/*
    Example of Promise that go in error
 */
var promiseInError = new Promise(function (resolve, reject) { reject(new Error('On Reject return always an error object')); });
function CallError() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promiseInError];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
CallError().then(function (val) { return console.log("never happen, sorry!"); }).catch(function (reason) { return console.log("Error:", reason); });
/*
 */
/*Propagation of Rejection.*/
new Promise(function (res, rej) {
    res("First true");
})
    .then(function (res) {
    console.log(res);
    return "Second false";
})
    .then(function (res) {
    //The use of an undeclared variable will cause a rejection
    // @ts-ignore
    aa = 2;
    console.log(res);
    return "Third true";
})
    .then(function (res) {
    console.log(res);
})
    .catch(function (error) {
    console.log('ERROR:', error.message);
});
