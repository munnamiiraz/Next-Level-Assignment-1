<h2>2. keyof এর ব্যাবহার <h2>

```ts
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

<h3>এখন আমরা চাইলে যেকোন Student টাইপের object ব্যাবহার করতে চাইলে আমরা এভাবে করতে পারি। এভাবে করলে আমরা এমন properties use করতে পারবোনা জেটা exist করে না|<h3>



<h2>5. union এর example:<h2>

```ts
let value: number | string

value = 42
value = 'hi'
```

<h3>union use করার সময় আমরা এভাবে করতে পারি। এটা অনেকটা or এর মতো কাজ করে, এই example এর ক্ষেত্রে value হয়ত number হবে অথবা string হবে। একসাথে দুইটা হবে না।<h3>


<h2>Intersection এর example<h2>

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

<h3>Intersection use করার সময় আমরা এভাবে করতে পারি। এটা অনেকটা and এর মতো কাজ করে, এই example এর ক্ষেত্রে আমরা HumanAndStudent এ শুধু name দিলেই হবে না সাথে institute ও দিতে হবে |<h3>
