import * as yup from "yup";

const memberSchema = {
  name: yup
    .string()
    .required("Name is required")
    .typeError("Enter a valid name"),
  surname: yup
    .string()
    .required("Surname is required")
    .typeError("Enter a surname"),
  nationalID: yup
    .number()
    .min(1, "Enter a valid ID number")
    .required("National ID number is required")
    .typeError("Enter a valid ID number"),
  dateOfBirth: yup
    .date()
    .required("Enter a valid ate of birth")
    .typeError("Enter a valid date"),
};

export const teacherSchema = yup
  .object({
    ...memberSchema,
    teacherNo: yup
      .number()
      .min(1, "Enter a valid ID number")
      .required("Teacher number is required")
      .typeError("Enter a valid name"),
    salary: yup.number().optional().typeError("Enter a valid number"),
    title: yup
      .mixed<TTeacherTitle>()
      .required()
      .oneOf(
        ["Dr", "Miss", "Mr", "Mrs", "Prof"],
        "Title must be one of the following values: Dr, Miss, Mr, Mrs, Prof"
      )
      .typeError("Enter a valid title"),
  })
  .required("This field is required");

export const studentSchema = yup
  .object({
    ...memberSchema,
    studentNo: yup
      .number()
      .min(1, "Enter a valid ID number")
      .required("Teacher number is required")
      .typeError("Enter a valid name"),
  })
  .required();
