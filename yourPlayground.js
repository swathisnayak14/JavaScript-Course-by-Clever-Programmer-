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
// function sayMyName() {
//   console.log("Swathi");
// }

//sayMyName()

//Dynamic Functions

//it has 1 arguments
//does: it logs out name to the console
// function sayMyName2(name) {
//   console.log(name);
// }

//sayMyName2('Hey there!')

//it has 1 arguments
//does: it logs out name to the console
// function greeting(name) {
//   greet = "hi " + name + ",nice to meet you";
//   console.log(greet);
// }

//greeting('Lance')

//using template literals to avoid concatenations

// function greeting(name) {
//   //template literals
//   greet = `hi ${name}, Nice to meet you!`;

//   console.log(greet);
// }
// //greeting('Lance')

// function sum(a, b) {
//   //return

//   return a + b;
// }

// num=sum(1,2)
// console.log(num)

// function foodTotal(food, tip) {
//   const tipPercentage = Number(tip / 100);
//   const tipAmount = food * tipPercentage;
//   const total = sum(food, tip);
//   return total;
// }

//console.log(foodTotal(100,20))
//-------------------------------------------------

//ES6 way
//arrow  function (=>)
//arrow  function with explicit return
// const sumArrow = (a,b)=>{
//     return a+b
// }

//arrow  function with implicit return(doesn't have squigglies)
//const summArrow2 =(a,b)=> a+b

//console.log(summArrow2(30,50))
//--------------------------------------------------

//ARRAYS

//const groceries=["banana","apple","orange","pear"]
// console.log(groceries)
// console.log(groceries[0])
// console.log(groceries[3])

//ARRAY METHODS
//1.push
//groceries.push('cherry')
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
// const person={
//     name:"Leonardo",
//     shirt:"white"
// }

//dot notation of accessing objects
// console.log(person.name)
// console.log(person.shirt)

//bracket notation of accessing objects
// console.log(person['name'])
// console.log(person['shirt'])


//assigning object
// person.phone='6715245561'
//console.log(person.phone)


//console.log(person)

// const person2={
//     name:"Qazi",
//     shirt:"black"
// }

// console.log(person2.name)
// console.log(person2.shirt)
// console.log(person2)


//doing using function
//template literals
//ES6 way
//objects

// const introducer=(name,shirt) =>{
//     const person3={
//         name:name,
//         shirt:shirt,
//         assets:100000,
//         liabilities:50000
//     }
//     const intro= `Hi! My name is ${person3.name} and the color of my shirt is ${person3.shirt} and my net worth is ${person3.assets-person3.liabilities} USD`

//     return intro
// }

//console.log(introducer('Swathi','blue'))
//console.log(introducer("Leo","white",))



// const introducer2=(name,shirt) =>{
//     const person3={
//         name:name,
//         shirt:shirt,
//         assets:100000,
//         liabilities:50000,
//         netWorth:assets-liabilities //error
//     }
//     const intro= `Hi! My name is ${person3.name} and the color of my shirt is ${person3.shirt} and my net worth is ${person3.netWorth} USD`

//     return intro
// }

//using methods(inside function)

// const introducer3=(name,shirt) =>{
//     const person3={
//         name:name,
//         shirt:shirt,
//         assets:100000,
//         liabilities:50000,
//         netWorth:function(){
//             return this.assets-this.liabilities
//         }

//     }
//     const intro= `Hi! My name is ${person3.name} and the color of my shirt is ${person3.shirt} and my net worth is ${person3.netWorth()} USD`

//     return intro
// }

//console.log(introducer3("Swathi","yellow"))
//----------------------------------------------------------------

//FOR LOOPS

//const fruits=["banana","apple","orange","pear"]

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

//advanced way of doing

// for(const fruit of fruits)
// {
//     console.log(fruit)
// }

// const num=[1,2,3,4,5,6]
// for(const n of num){
//     console.log(n)
// }


//doubling a number
// const num=[1,2,3,4,5,6]
// for(const n of num){
//      console.log(n*2)
// }

//putting the result in the array

// const num=[1,2,3,4,5,6]
// let result=[]
// for(const n of num){
//     result.push(n*2)
// }
// console.log(result)

//respresenting in functions

// const double=(numbers) =>{
//     let result=[]
//     for(const num of numbers){
//         result.push(num*2)
//     }
//     return result
// }

//console.log(double([1,2,3,4,5,6]))


//squaring for numbers

// const square=(numbers) =>{
//     let result=[]
//     for(const num of numbers){
//         result.push(num**2)
//     }
//     return result
// }

// console.log(square([1,2,3,4,5,6]))

//-----------------------------------------
//counting letters in a phrase
// const howManyLetters=()=>{
//     const phrase="Hey, can you come with me to the grocery store?"

//     for(letter in phrase){
//         console.log(letter)
//     }
// }

// howManyLetters()

//but should start from 1 not 0
// const howManyLetters=()=>{
//     let result=0;
//     const phrase="Hey, can you come with me to the grocery store?"

//     for(letter in phrase){
//         console.log(Number(letter)+1)
//         result=Number(letter)+1
//     }
//     return {result}
// }

// console.log(howManyLetters())

//pass the phrase while calling function

// const howManyLetters=(phrase)=>{
//     let result=0;
//     for(letter in phrase){
//         console.log(Number(letter)+1)
//         result=Number(letter)+1
//     }
//     return {result}
// }

// const phrase="Hey, can you come with me to the grocery store?"
// console.log(howManyLetters(phrase))


//Take input from the user

// const howManyLetters=(phrase)=>{
//     let result=0;
//     for(letter in phrase){
//         console.log(Number(letter)+1)
//         result=Number(letter)+1
//     }
//     return {result}
// }

// const phrase=prompt("Enter the sentence: ")
// console.log(howManyLetters(phrase))


//simplest way:using length

// const howManyLetters=(phrase)=>{
//     return{result:phrase.length}
// }

// const phrase=prompt("Enter the sentence: ")
// console.log(howManyLetters(phrase))

//sum up all numbers in array

// const sumArray=(numbers)=>{
//     let result =0;

//     for(const number of numbers){
//         result=result+number
//     }
//     return{result}
// }

// const nums=[1,2,3,4,5]
// console.log(sumArray(nums))


//max number in an array

// const maxNum=(numbers)=>{
//     let result=numbers[0];
//     for(const number of numbers){
//         if(number>result){
//             result=number
//         }
//     }
//     return result
// }

// const nums=[61,3,5,680,2]
// console.log(maxNum(nums))


//frequency in a phrase

const letterFrequency=(phrase)=>{
    let frequency={}
    for(const letter of phrase)
    {
        //check if letter exists in frequency
        if(letter in frequency){
            //increment the value by +1
            frequency[letter]++
        }
        else{
            //set value to 1
            frequency[letter]=1
        }
    }
    return frequency
}

// console.log(letterFrequency('Swathi'))

//you can use incremental operators
//++,--,+=


//word frequency

// const wordFrequency=(phrase)=>{
//     let frequency={}
//     words=phrase.split(' ')
//     for(const word of words){
//         if(word in frequency){
//             frequency[word]+=1
//         }
//         else{
//             frequency[word]=1
//         }
//     }
//     return frequency
// }

// console.log(wordFrequency('lol wat lol yo yo yo'))


//simpler way

const wordFrequency=(phrase)=>{
    words=phrase.split(' ')
    return letterFrequency(words)
    
}

//const userInput=prompt('Write your sentence: ')
// console.log(wordFrequency(userInput))

//--------------------------------------------------

//ARRAY METHODS

//higher order functions

//.map()


//[1,2,3,4,5].map(number=>console.log(number))

//doubling a number

// let result=[1,2,3,4,5].map(number=>number*2)
// console.log(result)

//using .map() in function

//doubling a number

const doubleMap=(numbers)=>{
    return numbers.map(number=>number*2)
}

//console.log(doubleMap([1,2,3,4]))

//using .filter()

// const nums=[1,2,3,4,5,6]
// console.log(nums.filter(num=>num>3))

//LOGICAL AND,OR

// const nums=[1,2,3,4,5,6]
// console.log(nums.filter(num=>num>4||num<2))

//flitering for array of objects

// const actors=[
//     {name:'johny',netWorth:2000000},
//     {name:'amber',netWorth:10},
//     {name:'leo',netWorth:10000000},
// ]

// let result=actors.filter(actor=>actor.netWorth>10)
// console.log(result)

// //yourPlayground.innerHTML=`<h1>${result[0].name}</h1>`

// let names=result.map(actor=>actor.name).join(',')
// console.log(names)

//yourPlayground.innerHTML=`<h1>${names}</h1>`

//using .reduce()
//SUM: Think it as reduce
//reduce takes in a function as an argument
//reduce loops and gives you back the accumulator

// const nums=[1,2,3]
// const result=nums.reduce(function(prev,curr){
//     return prev+curr
// })

// console.log(result)


//simpler way: using ES6 notation

// const nums=[1,2,3]
// const result=nums.reduce((prev,curr)=>prev+curr)
// console.log(result)


//feeding in a function as a parameter

//summing the numbers of an array

// function sum(a,b){
//     return a+b
// }

// const nums=[1,2,3]
// const result=nums.reduce(sum)
// console.log(result)

//product of the numbres in an array

// function product(a,b)
// {
//     return a*b
// }

// const nums=[1,2,3,4]
// const result=nums.reduce(product)
// console.log(result)


//summing all the networth

// const actors=[
//     {name:'johny',netWorth:2000000},
//     {name:'amber',netWorth:10},
//     {name:'leo',netWorth:10000000},
// ]

// console.log(actors.reduce((prev,curr)=>prev+curr.netWorth,0))
//here 0 is a default parameter which is prev, so prev is 0 at the first

//----------------------------------------------------------------------

//DOM Manipulation

