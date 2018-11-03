"use strict";
describe("MyLib.Math", function () {
    test("IsPositive with positive number return true", function () {
        //Arrange
        var value = 3;
        //Act
        var result = MyLib.Math.IsPositive(value);
        //Assert
        expect(result).toBeTruthy();
    });
});
