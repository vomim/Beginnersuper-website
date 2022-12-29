    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
  console.log('hello')
  
  
  



























/*

let name = "Teddy";
let day ="friday," 
const fingers = 20;
console.log(name,day,fingers);

let newName = "taddy";
console.log(`hello, ${newName}`);

let month = "26th. may";
let year = 2022; 
let displayText = 'wish you happy birth day '  + month+','   +  year + '.';
console.log(displayText);

console.log(`Danny is ${age} years old`)
let bananas = '10banans';
let oranges = '7oranges';
let potatoes = '3potatoes';

 const displayText = 'we can make juice by brending ' + bananas+ ',' + oranges + ' and '+ potatoes+ '.';
console.log(displayText);

let number = 100;
number = number - 10;
number -= 10;
console.log(number);

let age =7;
console.log('bulie is ' + age+ ' years 0ld.');// string concatenation
console.log(`bulie is  ${age}   years 0ld.`); // interpolation means process of evaluating string literals 
                                              //containing one or more placeholders (expressions, variables, etc).
                                              // also contains embeded expression ${} and use backticks(` `)

//condition 

/* As per tradition control flow is the order way statements are being excuted 
from left to right and top tobottom
while if statement condition ulter the flow order by determing the statement that meets the condition' 

LOGICAL " AND" OPERATOR used as &&
Checks two values and returns a boolean true or false

Java TERNARY Operator
In Java, a ternary operator can be used to replace the if...else statement in certain situations. 
Here, condition is evaluated and

if condition is true, expression1 is executed.
 And, if condition is false, expression2 is executed.
(condition ? expression1 : expression2;)
The ternary operator takes 3 operands (condition, expression1, and expression2). 
Hence, the name ternary operatOR




let isLateForWork = true;
if(isLateForWork){
 console.log(isLateForWork)
}else{
    console.log(earlyForWork)
}

let itIsRaining = true;

if(itIsRaining){
    console.log(itIsRaining);

}else{
    console.log(isNotRaining);
}

var sum = function(num1,num2) {
    return num1 + num2
}
console.log(sum(1,200))


const survel = newName =>{
   console.log(` your new name ${newName }.`);
}
survel ('tolly');

const multiply = (a, b)=> a * b; {
    console.log(multiply(3,5))
}
 
let x = 16;
let y = 9;
if(x > y){
    alert('you are right!');
}else{
    alert('you are wrong!');
}
let a, b, c, d;
a = 1, b = 2, c = 3, d = 4;
function isMarks(a,b,c,d){
    console.log(a + b + c + d);
    var wetherCoat ="jersey";
    alert(a +b + c + d);
    console.log(wetherCoat);
}
isMarks(1,2,3,4);


var volleyBall = function(h,j){
    console.log(h + j);
    
}
volleyBall(2,3);

let person1 = {age: 49, height: 170, hair: 'black,', gender: 'male'};
let person2 = {age: 49, height: 170, hair: 'blond,', gender: 'female'};

console.log(person1);


if(person1){
    hair = 'black,'; gender = 'male,';
    console.log('you are man');
}else{
       console.log('you are Indian');
}
if(person2 ){
     hair = 'blond,', gender = 'female,';
    console.log('you are waman');
}else{
    console.log('you are neither a woman nor man');
}

var isreal = (n, m) => n + m;
{
  document.write(`mark  mwelumuka`);   
}

function myFunction(){
  alert('welcome to javascript');
}
*/


