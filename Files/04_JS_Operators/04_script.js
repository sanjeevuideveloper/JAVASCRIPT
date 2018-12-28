// Assignment operator =

var abc='test';
console.log('value   :'+abc);
// Arithmetic operators + - * /
var num1=10;
var num2=20;
var num3=10/3;
console.log('The value of num3:  '+num3+'   type:'+typeof num3)
var sum=num1+num2;
console.log('The sum is  '+sum);
var sub=num1-num2;
console.log('The sub is  '+sub);
// Short hand math += , -= , *= , /=
var a=10;
var b=20;
var add=0;
add+=(a+b);
console.log(add);

// Conditional operators < , > , <= , >= , !=
var age=25;
if(age<=18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , -- (pre , post)

var x=10;
x++;
console.log(x)
// Logical operators AND , OR
var inRelation=true;
var parentsAgreed=false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon')
}
else{
    console.log('wait until parents Agreed')
}
// String Concatenation Operator
var name='John'
console.log('Name  '+name);

var a=10+20+'20'+10+20;

console.log(a); //30201020
// Ternary operator (? :)
age=25;
var message='';
(age<18)? message='you are minor':message='you are Major';
console.log(message);
// Type of operator
var test;
test=1000;
test='abc';
test=true;
test=null;
console.log('value :'+test+ 'Type is :'+typeof test);
// == operator
var a=10;
var b='10';
if(a==b){
    console.log('Both are Equal');

}
else{
    console.log("Both are Not Equal");
}


// === operator

if(a===b){
    console.log('Both are Equal');
}
else{
    console.log('Both are Not Equal');
}