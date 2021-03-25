// ※ 배열 내장함수 

//- for each 문 = 배열안에있는 원소들을 가지고 작업을 일괄적으로 호출할때 사용

//  const superheros = ['아이언맨', '캡틴아메리카', '토르', '닥터 스트레인지']

/* for(let i = 0; i < superheros.length; i++) {
    console.log(superheros[i]);
} */

// ---------------------------------------

/* function print(hero) {
    console.log(hero);
}

// ---------------------------------------

superheros.forEach(function(hero) {
    console.log(hero);
}); */

// ---------------------------------------

// superheros.forEach(hero => console.log(hero)); 

/* superheros.forEach(hero => {
    console.log(hero);
}); */ 

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - map = 배열안의 원소를 변환할때 사용

/* const array = [1,2,3,4,5,6,7,8];

const squared = [];
for(let i = 0; i < array.length; i++) {
    squared.push (array[i] * array[i]);
}

console.log(squared); */

// ---------------------------------------

/* const array = [1,2,3,4,5,6,7,8];

const squared = [];
array.forEach(n => {
    squared.push(n * n);
})

console.log(squared); */

// ---------------------------------------


/* const array = [1,2,3,4,5,6,7,8];

const square = n => n * n;
const squared = array.map(square);
// ----------------------
const squared = array.map(n => n * n);

console.log(squared); */

// ---------------------------------------

/* const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];
const texts = items.map(item => item.text);
console.log(texts); */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수  - index of = 배열안의 원소들이 몇번째인지 확인할때 사용 (특정값이랑 일치하는것을 찾을때)

/* const superheros = ['아이언맨', '캡틴아메리카', '토르', '닥터 스트레인지'];

const index = superheros.indexOf('닥터 스트레인지')
console.log(index); */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - find index = 특정조건을 확인하여 그 조건이 일치한다면 
                   //그 일치하는 원소가 몇번째인지 알려주는 함수
                   //  배열안에 내용이 객체이거나 특정조건이라면 findIndex 사용할 것

// ---------------------------------------
/* const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }   
] */

// const index = todos.findIndex(todo => todo.id === 3);
// console.log(index);

// --------------------------------------------------------------------------------------------------

//  ※ 배열 내장함수 - find를 사용하면 객체일경우 객체 자체의 내용을 출력 / 찾은 값 자체를 반환 

/* const todo = todos.find(todo => todo.done === false)
console.log(todo); */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - filter = 특정 조건을 만족하는 원소들를 찾아서 새로운 배열을 생성

/* const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }   
] 

const tasksNotDone = todos.filter(todo => todo.done); // filter( ) 함수 괄호 안에 todo는 파라메터이고 정해진 이름이 아님
console.log(tasksNotDone);                            // (아무거나 사용가능-최대한 각 함수명들이나 상수명들과 같게 할 것)
*/

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - splice = 특정항목을 제거할때 사용

/* const numbers = [10,20,30,40];

const index = numbers.indexOf(30); // index값을 찾음
const spliced = numbers.splice(index, 1); // index 값으로 부터 2개를 지움
console.log(numbers); // 배열에 남은 원소
console.log(spliced); // 배열에서 spliced 된 원소 */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - slice = 배열을 잘라낼때 잘라내는것 (splice와 다른점은 출력값이 기존의 배열을 건드리지 않음)
/* const numbers = [10,20,30,40];
const sliced = numbers.slice(0,2);
console.log(sliced);
console.log(numbers); */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - shift = 배열의 맨 앞에 있는 원소를 하나하나씩 뺀다.

/*const numbers = [10,20,30,40];

const value = numbers.shift();
numbers.shift();
numbers.shift();
console.log(value);
console.log(numbers); */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - pop = 배열의 맨 뒤에 있는 원소를 하나하나씩 뺀다. (push는 추가하는 개념으로써 push와 pop은 한쌍임)

/* const value = numbers.pop();
numbers.push(50);
const value = numbers.pop();
console.log(value);
console.log(numbers); */

// --------------------------------------------------------------------------------------------------

// ※ 배열 내장함수 - unshift = 배열의 맨 앞에 있는 원소를 하나하나씩 추가한다. (shift는 빼는 개념으로써 unshift와 shift는 한쌍임)

/* const value = numbers.unshift(0);
const value1 = numbers.shift();
console.log(numbers); */

// --------------------------------------------------------------------------------------------------

//※ 배열 내장함수 - concat = 한개 이상의 배열을 합쳐줌(기존 배열을 건드리지않음)

/* const arr1 = [1,2,3];
const arr2 = [4,5,6];
// const concated = [...arr1, ...arr2); spread 연산자 사용시
const concated = arr1.concat(arr2);
console.log(concated);
console.log(arr1);
console.log(arr2);*/

// --------------------------------------------------------------------------------------------------

//※ 배열 내장함수 - join = 배열안에 있는 값들을 문자열 형태로 합쳐줄때 사용

/*const array = [1,2,3,4,5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));*/

// --------------------------------------------------------------------------------------------------

//※ 배열 내장함수 - reduce = 이 함수는 어떠한 배열이 주어졌을때 배열 안에있는 모든 값들을 사용하여 어떤 값들을 연산해야할때 사용

//  const numbers = [1,2,3,4,5];

/* let sum = 0;
numbers.forEach(n => {
    sum += n;
})
console.log(sum); */

// ----------------------------------

/* const sum = numbers.reduce((acc, cur) => acc + cur, 0); // 여기서 0은 초기 acc가 되고 cur은 배열의 순서대로 차례로 값을 넣은후 연산한다.
console.log(sum); */

// ----------------------------------

/* const sum = numbers.reduce((accumulator, current, index, array) => { // index는 각 원소가 몇번째 인지를 알려주는 parameter값
    if(index === array.length - 1) {
        return (accumulator + current) / array.length;
    }   
    return accumulator + current;

}, 0); 
console.log(sum); */

// ----------------------------------

/* const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e',];
const counts = alphabets.reduce((acc, current,) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(counts); */

// --------------------------------------------------------------------------------------------------

// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

/* function countBiggerThanTen(numbers) {
  let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        counter += numbers[i] > 10 ? 1:0;
     }
        return counter;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5 */

// --------------------------------------------------------------------------------------------------

/* function countBiggerThanTen(numbers) {
let count = 0;
numbers.forEach(n => {
  if (n > 10) {
    count++;
  }
});
return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5 */

// --------------------------------------------------------------------------------------------------

/* function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5 */

  // --------------------------------------------------------------------------------------------------

  function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5 
  