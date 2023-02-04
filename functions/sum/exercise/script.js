/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add= (a,b)=> a+b

const sub= (a,b)=> a-b

const div= (a,b)=>{
  if(b==0){
    console.log("infinity");
  }
  else{
    console.log(a/b);
  }
}

const mul= (a,b)=> a*b

console.log(add(10,20));
console.log(sub(20,10));
div(20,10);
div(10,0);
console.log(mul(10,20))