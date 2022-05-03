const Reader = require("./../../app/utils/Reader");
const StudentsService = require("./../../app/services/StudentsService");

describe("Test Students Service js", () => {
    test("Test to return all Students", () => {
        const students = Reader.readJsonFile("visualpartners-tests.json"); 
        const allStudents = StudentsService.getAllStudents(students);
        expect(allStudents.length).toBe(51);
    });

    test("Test to return all Students that have certification", () => {
        const students = Reader.readJsonFile("visualpartners-tests.json"); 
        const allStudents = StudentsService.getStudentsWithCertification(students, true);
        expect(allStudents.length).toBe(29);
    });

    test("Test to return all Students having 'credits' > 500", () => {
        const students = Reader.readJsonFile("visualpartners-tests.json"); 
        const allStudents = StudentsService.getStudentsHavingCreditsGreaterThan(students, 500);
        expect(allStudents.length).toBe(27);
    });
});