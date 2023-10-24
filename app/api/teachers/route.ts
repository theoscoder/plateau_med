import type { NextApiRequest } from "next";

const teachersData: TTeacher[] = [
  {
    name: "James",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128618261826,
    teacherNo: 12781721,
    title: "Mr",
  },
  {
    name: "Hohn",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128615262826,
    teacherNo: 12781784,
    title: "Mr",
  },
  {
    name: "John",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128612261826,
    teacherNo: 12781791,
    title: "Mr",
  },
  {
    name: "Sam",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128611261826,
    teacherNo: 12781921,
    title: "Mr",
  },
];

export const GET = async (request: NextApiRequest) => {
  try {
    return new Response(JSON.stringify(teachersData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch teachers", {
      status: 500,
    });
  }
};
