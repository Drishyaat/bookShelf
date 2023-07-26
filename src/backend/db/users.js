import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Drishya",
    lastName: "Thekkumbad",
    email: "drishyathekkumbad@gmail.com",
    password: bcyrpt.hashSync("drishya123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Diya",
    lastName: "T",
    email: "diyat@gmail.com",
    password: bcyrpt.hashSync("diya123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Akshita",
    lastName: "Basu",
    email: "akshita26@gmail.com",
    password: bcyrpt.hashSync("akshita123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
