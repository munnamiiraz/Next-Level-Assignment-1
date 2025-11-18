# TypeScript Assignment এর প্রশ্নের উত্তর

## 2 নম্বর প্রশ্নের উত্তর

### keyof এর ব্যাবহার

`keyof` হলো একটি operator, এটি অবজেক্ট টাইপ (interface বা type alias) থেকে তার যেসকল প্রপার্টির নামগুলোকে নিয়ে Union Type তৈরি করে। এতে Type Safety নিশ্চিত হয় এবং নিশ্চিত করে যেন কোন object এর এমন প্রপার্টি অ্যাক্সেস করতে না পারে যেটা ওই object এ exist করে না।

```ts
// Example

interface Student {
  id: number;
  name: string;
  email: string;
}

type Keys = keyof Student;
// এর মান হবে "id" | "name" | "email"

let me: Student = {
  id: 1,
  name: "munna",
  email: "munna@gmail.com"
}

function getVal(student: Student, key: Keys) {
  return student[key];
}

getVal(me, "name");
```

আমরা যেকোন Student টাইপের object ব্যাবহার করতে চাইলে এভাবে করতে পারি। এভাবে করলে আমরা এমন properties use করতে পারবোনা যেটা exist করে না।

## 5 নম্বর প্রশ্নের উত্তর

### Union Type এর উদাহরণ

Union Type একাধিক টাইপকে একত্রিত করে। এর অর্থ হলো আমরা যদি কোন একটি variable/object কে ওই ইউনিয়নে অন্তর্ভুক্ত করি তাহলে ওই variable/object ইউনিয়নের যেকোন টাইপের হতে পারে। ইউনিয়ন অনেকটা (OR) এর মতো কাজ করে।

```ts
let value: number | string

value = 42
value = 'hi'
```

Union use করার সময় আমরা এভাবে করতে পারি। এই example এর ক্ষেত্রে value হয়ত number হবে অথবা string হবে। একসাথে দুইটা হবে না।

### Intersection Type এর উদাহরণ

Intersection Type একাধিক টাইপকে একত্রিত করে নতুন একটা টাইপ তৈরি করে। এটা অনেকটা (AND) এর মতো কাজ করে।

```ts
type Human = {
  name: string
}

type Student = {
  institute: string
}

type HumanAndStudent = Human & Student

let person: HumanAndStudent = {name: "munna", institute: "MU"}
```

এই example এর ক্ষেত্রে আমরা HumanAndStudent টাইপে শুধু name দিলেই হবে না সাথে institute ও দিতে হবে। কারন Human এবং Student মিলে নতুন একটা টাইপ তৈরি হয়েছে যেটাতে সবগুলো প্রপার্টি আছে।