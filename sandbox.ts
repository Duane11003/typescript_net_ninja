// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;
age = 20;

// arrays
let ninjas: string[] = [] // an array that only accepts strings, thats assigned to an empy array

// union type..our way of saying it can be 1 of 2, types
let mixed: (string | number)[] = []; // an array that can accept array OR strings, thats assigned to an empty array
mixed.push('duane')

console.log(mixed)

// objects

let ninjaOne: object;