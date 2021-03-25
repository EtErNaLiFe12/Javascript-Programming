//반복문(for문)

/* for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let a = 10; a > 0; a-=2) {
    console.log(a);
} */

// --------------------------------------------

/* //for문과 배열 같이 사용

const names = ['멍멍', '야옹', '맴맴'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} */

// --------------------------------------------

/* //while문

let b = 0;

while (b < 10) {
    console.log(b);
    b++;
} */

// --------------------------------------------

/* let c = 0;
let isFun = false;

while (!isFun) {
    console.log(c);
    c++;
    if ( c === 30 ) {
        isFun = true;
    }
} */

// --------------------------------------------

 // for of - 배열안에 있는것들을 사용할때 사용

// const numbers = [10,20,30,40,50];

// for (let num of numbers)
//     console.log(num);


// --------------------------------------------

/*
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}; */
/*  console.log(Object.entries(doggy)); // 상위에 키와 value값을 배열로 가져오고 싶을때 Object.entries(##); 사용 
    console.log(Object.keys(doggy)); // 상위에 키값들을 배열로 가져오고 싶을때 Object.keys(##)); 사용
    console.log(Object.values(doggy)); //상위에 valuer값을 배열로 가져오고 싶을때 Object.values(##)); 사용 */
//for in
/* for (let key in doggy) {
    console.log(`${key} : ${doggy[key]}`);
} */

// --------------------------------------------

//continue - 특정조건이 만족됬을때 다음 루프를 실행 함
//break - 반복문을 끝냄
/* for (let i = 0; i < 10; i++) {
    if (i === 2) continue;
    console.log(i);
    if (i===5) break;
} */

// --------------------------------------------

/* function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1,2,3,4,5]);
console.log(result); */

// --------------------------------------------

// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

function biggerThanThree(numbers) {
   const array = [];
   for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] > 3) {
           array.push(numbers[i]);
       }
    }
       return array;
   }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
