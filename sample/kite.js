/*
 * Person class
 */
class Person {
  constructor(props) {
    this.name = props.name;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.languages = props.languages;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return this.deathDate - this.birthDate;
  }
}

// Create instance of the Person class
const person1 = new Person({
  name: 'John',
  birthDate: 1870,
  deathDate: 1930,
  languages: ['English', 'Spanish'],
});

console.log(person1.age);

if (person1.age > 30) {
  for (let i = 0; i < person1.languages.length; i++) {
    console.log(`${person1.name} speaks ${person1.languages[1]} language`);
  }

  if (person1.age == true) {
    console.log(`${person1.name} is older than 30.`);
  } else if (person1.age == false) {
    console.log(`${person1.name} is younger than 30.`);
  }
} else {
  console.log(`${person1.name} is younger than 30.`);
}

/**
 * Adds two numbers together
 * @param {number} num1 - The first number to add
 * @param {number} num2 - The second number to add
 * @returns {number} The result of adding num1 and num2
 */
function addNumbers(num1, num2) {
  return num1 + num2;
}

const randomNumber = Math.floor(Math.random() * 10) + 1;
const sum = addNumbers(3, 7 + randomNumber);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map((number) => number * 2);

try {
  console.log(nonExistentVariable);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
