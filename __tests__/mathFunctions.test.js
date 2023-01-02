import * as mathFunctions from "../src/scripts/mathFunctions.js";

test("test validateIntegerNumber function", () => {
    let testValueList = [
        1,
        546548,
        -2,
        0,
        1.5,
        undefined,
        null,
        "asd",
        false,
        {
        name: "ExampleObject",
        id: 0
        }
    ];
    
    expect(mathFunctions.validateIntegerNumber(testValueList[0])).toBe(true);
    expect(mathFunctions.validateIntegerNumber(testValueList[1])).toBe(true);
    expect(mathFunctions.validateIntegerNumber(testValueList[2])).toBe(true);
    expect(mathFunctions.validateIntegerNumber(testValueList[9])).toBe(true);

    expect(mathFunctions.validateIntegerNumber(testValueList[3])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList[4])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList[5])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList[6])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList[7])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList[8])).toBe(false);
});