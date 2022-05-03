const StudentsController = require("./controllers/StudentsController");
const express = require("express");

const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Students Api welcome!"});
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});

app.get("/v1/students",(request, response) =>
{
    const allStudents = StudentsController.getAllStudents();
    response.json(allStudents);
}
);

app.get("/v1/students/emailsHavingCertification",(request, response) =>
{
    const emailList = StudentsController.getStudentsHavingCertification(true);
    response.json(emailList);
}
);

app.get("/v1/students/studentsHavingCreditsGreaterThan/:creditsValue",(request, response) =>
{
    const creditsValue = request.params.creditsValue;
    const studentsList = StudentsController.getStudentsHavingCreditsGreaterThan(creditsValue);
    response.json(studentsList);
}
);