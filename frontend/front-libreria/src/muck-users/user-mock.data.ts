export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Andres Felipe",
    email: "andresfelipe@gmail.com",
    password: "123",
  },
  {
    id: 2,
    name: "Daniela Ramirez",
    email: "daniela@gmail.com",
    password: "789",
  },
];
