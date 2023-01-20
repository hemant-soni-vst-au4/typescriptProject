## Explains
- subset of javascript

string, number, boolean, string[]
tupple -> fixed = [number, string] => only 2 element specific

type Person = {
  name:string;
  age: number;   
}
let person: Person = {
  name: "Hemant"
}

? -> to make optional a property => age?: number

For array of object
let lotsOfPeople: Person[];

Union

let age: number | string;

Declaring Function type
1st let printName: Function;
2nd let printName: (name: string) => void     => void return type (return undefine)

Any type => let name:any;
Unknown type => let name: unknown   (recommended)

Never
let printName: (name: string) => never (return nothing);

type => alias - 2 type - type and interface

interface Person = {
  name:string;
  age: number;   
}


type X = {
  a: string;
  b: number;
}

to extend the type => Y contain property of X
type Y = X & {
  a: string;
  b: number;
}

interface Person = {
  name:string;
  age: number;   
}

interface Guy extends Person {
  profession: string
}

type Y = Person & {
  a: string;
  b: number;
}