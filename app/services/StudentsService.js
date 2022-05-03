class StudentsService {
    constructor() {}


    static getAllStudents(students) {
        return students;
    }

    static getStudentsWithCertification(students, certificationValue) {
        const filteredStudents = students.filter(
            (student) => student.haveCertification == certificationValue
        );
        if (!filteredStudents) {
            return [];
        }
        return filteredStudents;
    }

    static getStudentsHavingCreditsGreaterThan(students, value) {
        const filteredStudents = students.filter(
            (student) => student.credits > value
        );
        return filteredStudents;
    }
}

module.exports = StudentsService;