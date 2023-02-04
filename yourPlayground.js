// console.log('hello world')
//--------------------------------------------

// variables(var,const,let)

// let name='Swathi'
// console.log(name)
//--------------------------------------------

//operators

// food=20
// tipPercentage=0.2
// tipAmount=food*tipPercentage
// console.log(tipAmount)
//--------------------------------------------

//FIRST JS APP

const prompt = require("prompt-sync")();
// //user input
// food=Number(prompt('How much was the tip amount? '))
// tipPercentage=Number(prompt('tip % ')/100)
// tipAmount=food*tipPercentage
// console.log('Tip Amount: ',tipAmount)
// total=food+tipAmount
// console.log('Total Amount: ',total)
//-------------------------------------------------

//data types

//numbers:1,2,3,2.4
//strings:'hello','hello world'
//arrays:[]
//objects:{}
//boolean:true or false
//-------------------------------------------------

//Math Operators

//Multiply *
//Divide /
//Exponents **
//Modulo/Remainder % 5 % 2=1
//Add +
//Subtract -
//-------------------------------------------------

//Math Methods

// Floors:Rounds down
// Ceil: Rounds up
//Random: gives you number between 0 and 1

// console.log(Math.floor(Math.random()*3))
//-------------------------------------------------

//SECOND JS APP
//BUILD A WEATHER APP (conditionals(==,===,<,>))
//if rain 'grab your umbrella'
//else 'wear your sunglasses'

// let weather=prompt('How is the weather? ')

// if(weather=='rainy'){
//     console.log('grab your umbrella')
// }
// else{
// console.log('wear your sunglasses')
// }

//------------------------------------------------
//Functions

//it has 0 arguments
//does: it logs out name to the console
function sayMyName() {
  console.log("Swathi");
}

//sayMyName()

//Dynamic Functions

//it has 1 arguments
//does: it logs out name to the console
function sayMyName2(name) {
  console.log(name);
}

//sayMyName2('Hey there!')

//it has 1 arguments
//does: it logs out name to the console
function greeting(name) {
  greet = "hi " + name + ",nice to meet you";
  console.log(greet);
}

//greeting('Lance')

//using template literals to avoid concatenations

function greeting(name) {
  //template literals
  greet = `hi ${name}, Nice to meet you!`;

  console.log(greet);
}
//greeting('Lance')

function sum(a, b) {
  //return

  return a + b;
}

// num=sum(1,2)
// console.log(num)

function foodTotal(food, tip) {
  const tipPercentage = Number(tip / 100);
  const tipAmount = food * tipPercentage;
  const total = sum(food, tip);
  return total;
}

//console.log(foodTotal(100,20))
//-------------------------------------------------

//ES6 way
//arrow  function (=>)
//arrow  function with explicit return
const sumArrow = (a,b)=>{
    return a+b
}

//arrow  function with implicit return(doesn't have squigglies)
const summArrow2 =(a,b)=> a+b

//console.log(summArrow2(30,50))
//--------------------------------------------------

//ARRAYS

const groceries=["banana","apple","orange","pear"]
// console.log(groceries)
// console.log(groceries[0])
// console.log(groceries[3])

//ARRAY METHODS
//1.push
groceries.push('cherry')
//console.log(groceries)

//2.slice
//start from 0 inclusive upto 2 but ot 2)
//console.log(groceries.slice(0,2))

//console.log(groceries.slice(2,6))
//console.log(groceries.slice(1,4))

//3.indexof
//gives the indexx of the desired
//console.log(groceries.indexOf("orange"))
//console.log(groceries.indexOf("pear"))

//4.length
//console.log(groceries.length)
//-------------------------------------------------

//OBJECTS{}=key-value pairs
//here person is the object
const person={
    name:"Leonardo",
    shirt:"white"
}
//dot notation of accessing objects
// console.log(person.name)
// console.log(person.shirt)

//bracket notation of accessing objects
// console.log(person['name'])
// console.log(person['shirt'])


//assigning object
person.phone='6715245561'
//console.log(person.phone)


//console.log(person)

const person2={
    name:"Qazi",
    shirt:"black"
}

// console.log(person2.name)
// console.log(person2.shirt)
// console.log(person2)


//doing using function
//template literals
//ES6 way
//objects

const introducer=(name,shirt) =>{
    const person3={
        name:name,
        shirt:shirt,
        assets:100000,
        liabilities:50000
    }
    const intro= `Hi! My name is ${person3.name} and the color of my shirt is ${person3.shirt} and my net worth is ${person3.assets-person3.liabilities} USD`

    return intro
}

//console.log(introducer('Swathi','blue'))
console.log(introducer("Leo","white",))