import type { NextApiRequest } from "next";

const studentsData: TStudent[] = [
  {
    name: "James",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128618261826,
    studentNo: 12781721,
  },
  {
    name: "Hohn",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128615262826,
    studentNo: 12781784,
  },
  {
    name: "John",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128612261826,
    studentNo: 12781791,
  },
  {
    name: "Sam",
    surname: "Joe",
    dateOfBirth: new Date("12-12-2000"),
    nationalID: 128611261826,
    studentNo: 12781921,
  },
];

export const GET = async (request: NextApiRequest) => {
  try {
    return new Response(JSON.stringify(studentsData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch students", {
      status: 500,
    });
  }
};
