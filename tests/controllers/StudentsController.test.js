const StudentsController = require("./../../app/controllers/StudentsController");

describe("Test Students Controller js", () => {
    test("Test to return all Students", () => {
        const students = StudentsController.getAllStudents(); 
        expect(students.length).toBe(51);
    });

    test("Test to return all Students that have certification", () => {
        const allStudents = StudentsController.getStudentsHavingCertification(true);
        expect(allStudents.length).toBe(29);
    });

    test("Test to return all Students having 'credits' > 500", () => {
        const allStudents = StudentsController.getStudentsHavingCreditsGreaterThan(500);
        expect(allStudents.length).toBe(27);
    });
});