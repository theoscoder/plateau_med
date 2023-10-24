import { useEffect, useState } from "react";

export const useStudent = () => {
  const [isAddingStudent, isAddingStudentSet] = useState(false);
  const [students, setStudents] = useState<TStudent[]>([]);

  useEffect(() => {
    getStudents().then((data) => {
      setStudents(data);
    });
  }, []);

  const getStudents = async () => {
    isAddingStudentSet(true);
    try {
      const response = await fetch(`api/students`);
      const students = await response.json();
      return students;
    } catch (error) {}
  };

  const addStudent = (data: TStudent) => {};

  return { students, isAddingStudent, addStudent };
};
