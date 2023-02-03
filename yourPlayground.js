// console.log('hello world')

// variables(var,const,let)

// let name='Swathi'
// console.log(name)



//operators

// food=20
// tipPercentage=0.2
// tipAmount=food*tipPercentage
// console.log(tipAmount)


//FIRST JS APP

const prompt = require ("prompt-sync")();
// //user input
// food=Number(prompt('How much was the tip amount? '))
// tipPercentage=Number(prompt('tip % ')/100)
// tipAmount=food*tipPercentage
// console.log('Tip Amount: ',tipAmount)
// total=food+tipAmount
// console.log('Total Amount: ',total)


//data types

//numbers:1,2,3,2.4
//strings:'hello','hello world'
//arrays:[]
//objects:{}
//boolean:true or false


//Math Operators

//Multiply *
//Divide /
//Exponents **
//Modulo/Remainder % 5 % 2=1
//Add +
//Subtract -


//Math Methods

// Floors:Rounds down
// Ceil: Rounds up
//Random: gives you number between 0 and 1

// console.log(Math.floor(Math.random()*3))


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

//Functions

//it has 0 arguments
//does: it logs out name to the console
function sayMyName(){
    console.log('Swathi')
}

//sayMyName()

//Dynamic Functions

//it has 1 arguments
//does: it logs out name to the console 
function sayMyName2(name){
    console.log(name)
}

//sayMyName2('Hey there!')


//it has 1 arguments
//does: it logs out name to the console 
function greeting(name){
    greet='hi ' + name+',nice to meet you'
    console.log(greet)
}

//greeting('Lance')

//using template literals to avoid concatenations

function greeting(name){
    //template literals
    greet=`hi ${name}, Nice to meet you!`

    console.log(greet)
}
//greeting('Lance')

function sum(a,b){
    //return

    return a+b
}

// num=sum(1,2)
// console.log(num)

function foodTotal(food,tip){
    tipPercentage=Number(tip/100)
    tipAmount=food*tipPercentage    
    total=sum(food,tip)
    return total
}

//console.log(foodTotal(100,20))