const Reader = require("./../../app/utils/Reader");

describe("Test Reader.js", () => {
    test("Return", () => {
        const explorers = Reader.readJsonFile("visualpartners-tests.json"); // esto regresa la lista de explorers del archivo
        expect(explorers.length).toBe(51);
    });
});