type TMember = {
  name: string;
  surname: string;
  nationalID: number;
  dateOfBirth: Date;
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
