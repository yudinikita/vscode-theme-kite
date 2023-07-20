/*
 * Define a class...
 */
class Animal {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Define class methods
  public getAge(): number {
    return this.age;
  }

  public setAge(newAge: number): void {
    this.age = newAge;
  }
}

const cat = new Animal('Fluffy', 3);

cat.setAge(cat.getAge() + 4);

interface User {
  readonly id: number;
  firstName: string;
  lastName?: string;
}

const user: User = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
};

console.log('User ID: ' + user.id);

function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity('hello');
const result2 = identity<number>(42);
const result3 = identity<boolean>(true);

type MyType = string | number;

const myVar1: MyType = 'hello';
const myVar2: MyType = 42;

function myFunc(input: MyType): boolean | null {
  if (typeof input === 'string') {
    return false;
  } else if (typeof input === 'number') {
    return null;
  }
  return null;
}
