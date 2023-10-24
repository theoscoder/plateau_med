import { useEffect, useState } from "react";

export const useTeacher = () => {
  const [isAddingTeacher, isAddingTeacherSet] = useState(false);
  const [teachers, setTeachers] = useState<TTeacher[]>([]);

  useEffect(() => {
    getTeachers().then((data) => {
      setTeachers(data);
    });
  }, []);

  const addTeacher = async (data: TTeacher) => {};

  const getTeachers = async () => {
    isAddingTeacherSet(true);
    try {
      const response = await fetch(`api/teachers`);
      const teachers = await response.json();
      return teachers;
    } catch (error) {}
  };

  return {
    isAddingTeacher,
    addTeacher,
    teachers,
  };
};
