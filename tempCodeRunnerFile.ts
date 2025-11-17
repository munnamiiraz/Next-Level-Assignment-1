interface Student {
  id: number;
  name: string;
  email: string;
}

type Keys = keyof Student;
let me: Student = {
  id: 1,
  name: "munna",
  email: "munna@gmail.com"
}

console.log(me["name"]);