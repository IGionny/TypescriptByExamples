describe("MyLib.Math", () => {
  test("IsPositive with positive number return true", () => {
    //Arrange
    let value: number = 3;

    //Act
    let result = MyLib.Math.IsPositive(value);

    //Assert
    expect(result).toBeTruthy();
  });
});
