const Reader = require("./../../app/utils/Reader");
const StudentsService = require("./../../app/services/StudentsService");

class StudentsController {
    constructor() {}

    static getAllStudents() {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentsService.getAllStudents(students);
    }

    static getStudentsHavingCertification(certificationValue) {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentsService.getStudentsWithCertification(students, certificationValue);
    }

    static getStudentsHavingCreditsGreaterThan(creditsValue) {
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentsService.getStudentsHavingCreditsGreaterThan(students, creditsValue);
    }
}

module.exports = StudentsController;