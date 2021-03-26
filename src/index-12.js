// 삼항연산자 - condition ? true : false

/* const array = [];
let text = '';
if(array.length === 0) {
    text = '배열이 비어있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);*/

//--------------------------------------------

/* const array = [1,2];
let text = array.length === 0 
? '배열이 비어있습니다.' //true일경우
: '배열이 비어있지않습니다.'; //false일 경우
console.log(text);*/

//--------------------------------------------

/* const condition1 = true;
const condition2 = false;

const value = condition1
? '와우!'
: condition2
    ? 'blabla'
    : 'foo'
console.log(value);*/

//-----------------------------------------------------------------------------------------------------

//Truthy 와 Falsy

// FALSY 한 값들을 ! 하여 TRUTHY로 값들로 바꿈
// console.log(!undefined);
// console.log(!null);
// console.log(!0);
// console.log(!'');
/* console.log(!NaN); Not a Number
    - const value2 = 1 / 'wefw';
      console.log(value2); */

// TRUTHY 한 값들을 ! 하여 FALSE 값들로 바꿈
// console.log(!3);
// console.log(!'hello');
// console.log(!['array']);
// console.log(![]);
// console.log(!{});

//--------------------------------------------

function print(person) {
    if (!person) {
        return;
    }
    console.log(person.name);
}

const person = null

print();

//--------------------------------------------

const value1 = {};

const truthy = !!value1
console.log(truthy);