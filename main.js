"use strict";

function sayHi()
{
    console.log("Say Hello to people");
}

sayHi();


console.log("hi"+"hello");
let h=null;
h=3;
{
    h=8;
    let g = 4;
    console.log(g);
}

console.log(`2+2 is: ${2+2}`);
const x=4;
const y=9;
console.log(`${x} plus ${y} is ${x+y} `);

const e= Number("9");
console.log("2 + 2 is: "+ (2+2));


const ps=require("prompt-sync");
const prompt=ps();
const input=Number(prompt("Enter a number"));
console.log(typeof(input));

console.log(Boolean(""));

console.log("0"===0);
console.log(2.1e-3);
let value = 3.1 * (10 ** -3);
console.log(value.toFixed(4));
let a=null;
let b=9;
a??=b;
console.log(a);
console.log(Boolean(2));

let assign1 = (name) => { return "Say" + name };
console.log(assign1("HIra"));

let sum=(x,y)=>x+y;

console.log(sum(2,4));

const dragon={
    name:"Dragon",
    strength: 20,
    health:120,

    behavior(){
        return `${this.name} has  ${this.health} points`;
    }
};
function behavior(character)
{
    return `${character.name} has ${character.health} points`;
}
dragon.health = 150;
dragon.mana = "hello";
console.log(behavior(dragon));
dragon.health-=10;
dragon.strength+=120;
console.log(behavior(dragon));
console.log(dragon.behavior());



let x1;
while((x1 = Math.floor(Math.random()* 11)!==10))
{
    console.log(x1);
    ++x1;
}
