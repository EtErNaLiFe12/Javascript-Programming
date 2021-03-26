//scope - 변수 또는 함수를 선언할시에 어디서 부터 어디까지의 범위가 유효한지

//Global / Function / Block

// Global scope

/* const value = 'hello'; //global scope

function myFunction() {
    console.log('myFunction:');
    console.log(value);
}

function otherFunction () {
    console.log('otherFunction:');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope:');
console.log(value); */

//---------------------------------------
// function scope

/* const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

myFunction()
console.log('global scope: ');
console.log(value);
console.log(anotherValue); // anotherValue is not defined */

//---------------------------------------
// block scope
 /* const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value); */

//---------------------------------------

// hoisting - 선언되지않은 함수 & 변수 끌어올려 사용할수있는 js 작동방식 // 피해야함

/* myFunction();

function myFunction() {
    console.log('hello world');

}
// myFunction(); */

//---------------------------------------

/* console.log(number);
const number = 2; */

//---------------------------------------

function fn() {
    console.log('a');
    
}

fn();
