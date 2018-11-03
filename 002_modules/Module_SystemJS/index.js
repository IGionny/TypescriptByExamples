System.register(["./MyLib/NumberUtils"], function (exports_1, context_1) {
    "use strict";
    var NumberUtils_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NumberUtils_1_1) {
                NumberUtils_1 = NumberUtils_1_1;
            }
        ],
        execute: function () {
            console.log("-1 is posititive?", NumberUtils_1.IsPositive(-1));
        }
    };
});
