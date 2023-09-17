const obj={
    name: "hira",
    age: 30,
    similarFunc:function (){ return `Hi here is the same issue of accessing ${this.name}`},
    describe: function (name) { return `Hi sum is ${(name)} is actually ${this.name}` },
    func: function () {
        return "this is accessing " + this.name;
    },
    nowdoit: function(){
        return `now it will access ${this.name} inshAllah`
    }
};
console.log(obj.similarFunc());
console.log(obj.describe('ali'));
console.log(obj.func());
console.log(obj.nowdoit());

function constructorofobj(a)
{
    this.name="haris";
    this.age=a;
   this.favfood="Pulao";
    this.func=function(){
        return `new function called now with ${this.name} having age ${this.age}`
    }
}
//  console.log(obj.similarFunc());
// console.log(obj.describe(obj.name));
// console.log(obj.func());
//  console.log(obj.nowdoit());
// console.log(obj["name"]);
// const newObj = new constructorofobj(9);
// console.log(newObj.func());

//single object problem
const newobj=obj;
newobj.name="It will be Changed Everywhere as passed by reference";
console.log(newobj.name);
console.log(obj.name);
// //Now you can create multiple objects from BLUEPRINT OF CONSTRUCTOROFOBJ

const FirstChild= new constructorofobj(32);
const SecondChild=new constructorofobj(25);
FirstChild.name="Hira";
SecondChild.name="Sara";
console.log(FirstChild.name);
console.log(SecondChild.name);


//add property dynamically without initializing in constrcutorofobj
constructorofobj.prototype.favfood="Pulao2";


//dyanmically adding property and method to object

SecondChild.food="Biryani";
SecondChild.funcOfEating=function()
{
    return `${this.name} loves to eat ${this.food} but still has ${this.favfood} as favourite`
}
console.log(FirstChild.func());
console.log(SecondChild.funcOfEating());




console.log(FirstChild.favfood);


const movies=[
    "Zootopia",
    "The legend of maula jutt",
    "top gun maverick"
];

for (let m of movies)
{
    console.log(m);
}
movies.unshift("New Jersey");
for (let m of movies)
{
    console.log(m);
}
//movies.splice(0, 2);

movies.forEach(function (name,index)
{
    console.log("For Each Method at index "+index+" is : "+name);
});
console.log(movies.length);

console.log("Aliya".length);
console.log("HiraButt".toUpperCase());

const word = "koala";
console.log(word === "koala");    // true
console.log(word === "kangaroo");
console.log("Hira".toLowerCase()==="hira");

const namee="sarah";
for(let character of namee)
{
    console.log(character);
}
const namearr=Array.from(namee);
namearr.forEach((m)=>console.log(m));
const list="mon,tues,wed,";
const listarr=list.split(",");
console.log(listarr.length);

listarr.forEach(l=>console.log(l));
