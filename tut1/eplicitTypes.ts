//explicit Types
let character: string;
let numb: number;
let isBoolean: boolean;


// character = 30; throws an error

//arrays
let ninja: string[] = [];
ninja.push("Nathan");

let samuri: number[] = [];

//union types
let mixed: (string|number|boolean)[] = []; // union type to arrays
mixed.push("hello");
mixed.push(20);
mixed.push(true);

let uid: string|number|boolean; //union type to a variable
uid = 50;
uid= "hit";
uid = false;
//objects