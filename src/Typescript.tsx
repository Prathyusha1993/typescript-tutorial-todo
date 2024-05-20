import React from 'react'

const Typescript = () => {

let name:string;
name='Pinky'
let age:number;
let isStudent:boolean;
let hobbies:string[];
let bookNum:number[];
let role:[number, string]; //tuple type it contain number and string
role = [5, 'teacher'];

//object in typescript:
//aliases:
type Person = {
  name: string;
  age: number;
  contact?: number;
}

let person: Person = {
  name: 'Pinky',
  age: 30
}
//array of object:
let lotsOfPeople: Person[];

//age to be number and string then we can use union type
let perAge: number | string;
perAge = 'thirty';
perAge = 5;

//functions in typescript:
function printName(name: string) {
  console.log(name)
}
printName('Pinky');

//void returns undefined and never returns anything
let printAge: (age: number) => void;
let printAge1: (age: number) => never;

//Extending types
type X = {
    a:string;
    b:number;
}
type Y = {
    c:string;
    d:number;
}
type Z = Y & {
    e:string;
    f:number;
}
let y: Y = {
    c: 'edgfg',
    d: 43
}
let z: Z = {
    e:'edsf',
    f:21,
    c:'wsfd',
    d:23
}

//extending interfaces:
interface Person1 {
    name: string;
    age: number;
}
interface Guy extends Person1 {
    profession: string;
}
//interface extends type:
interface Person2 {
    name: string;
    age: number;
}
type X1= Person1 & {
    a:string;
    b:number;
}
//type extends interface:
type X2 = {
    a:string;
    b:number;
}
interface Person3 extends X2 {
    name: string;
    age: number;
}
  return (
    <div>
    </div>
  )
}

export default Typescript;



