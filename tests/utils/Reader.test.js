const Reader = require("./../../app/utils/Reader");

describe("Test Reader.js", () => {
    test("Read Test File: 'visualpartners-tests.json'", () => {
        const students = Reader.readJsonFile("visualpartners-tests.json"); 
        expect(students.length).toBe(51);
    });
});