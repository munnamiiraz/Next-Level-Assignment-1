const formatValue = (value: string | number | boolean) : (string | number | boolean) =>{
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if(typeof value === 'number') {
    return value * 10;
  } else if(typeof value === 'boolean') {
    return !value;
  } else {
    return value;
  }
}

const getLength = <T>(value: string | T[]): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length
  } else {
    return 0;
  }
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}



type BookType = {
  title: string;
  rating: number;
}

const filterByRating = (books: BookType[]): BookType[] => {
  return books.filter((book) => book.rating >= 4)
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true)
}


interface Book {
  title : string,
  author : string,
  publishedYear : number,
  isAvailable : boolean,
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`);
}

const getUniqueValues = (array1: (number | string)[], array2: (number | string)[]): (number | string)[] => {
  let arr: (number | string)[] = []

  for(let i = 0; i < array1.length; i++) {
    let got = false
    for(let j = 0; j < arr.length; j++) {
      if(array1[i] === arr[j]) {
        got = true
        break
      }
    }
    if(!got) {
      arr.push(array1[i])
    }
  }

  for(let i = 0; i < array2.length; i++) {
    
    let got = false
    for(let j = 0; j < arr.length; j++) {
      if(array2[i] === arr[j]) {
        got = true
        break
      }
    }
    if(!got) {
      arr.push(array2[i])
    }
  }
  return arr;
}


interface Product {
  name: string,
  price: number,
  quantity: number,
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  let total = 0

  products.map((product) => {
    let { price, quantity, discount } = product
    if(discount !== undefined) price = price - (price * (discount / 100))

    total += price * quantity
  })

  return total;
}
