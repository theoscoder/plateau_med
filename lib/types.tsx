type TMember = {
  name: string;
  surname: string;
  nationalID: number;
  dateOfBirth: string;
};

type TTeacherTitle = "Mr" | "Mrs" | "Miss" | "Dr" | "Prof";

type TTeacher = TMember & {
  title: TTeacherTitle;
  salary?: number;
  teacherNo: number;
};

type TStudent = TMember & {
  studentNo: number;
};

const teachers: TTeacher[] = [
  {
    name: "Emmanuel",
    title: "Mr",
    salary: 900000,
    surname: "Akhigbe",
    teacherNo: 1,
    nationalID: 123,
    dateOfBirth: "",
  },
];

const students: TStudent[] = [
  {
    name: "Emmanuel",
    surname: "Akhigbe",
    studentNo: 1,
    nationalID: 123,
    dateOfBirth: "",
  },
];
