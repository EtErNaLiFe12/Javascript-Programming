//spread & rest (...) - 객체 혹은 배열을 펼칠수있음 / 기존 객체를 이용하여 새로운 객체를 만들시 spread 사용
//spread 연산자 - 객체

/* const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}; 
const greenCuteSlime = {
    ...purpleCuteSlime,       //spread 연산자는 ...을 통해 가져올수 있고 가져온 값들중 중복된 객체에 한에서는 덮어씌움
    color: 'green' //color: 'green' 이 만약에 ...purpleCuteSlime 보다 먼저 왔다면 purpleCuteSlime 에 있는 color값이 덮어씌움 되어 purple로 됨.
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime); */

//----------------------------------------------------------------------------------------------------

//spread 연산자 - 배열

/* const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기']; //[...animals, '비둘기'] === animals.concat('비둘기')

console.log(animals);
console.log(anotherAnimals); */

//---------------------------------------

/* const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5] */

//----------------------------------------------------------------------------------------------------

//rest 연산자 - 객체 
//...rest(rest라고 안해도 됨 바꿀수있음) rest 는 get the rest of object key and value except specified key and value.

/* const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...cuteSlime } = purpleCuteSlime;
  console.log(color);
  console.log(cuteSlime);

  const {attribute, ...slime } = cuteSlime;
  console.log(slime); */

//---------------------------------------

//rest 연산자 - 배열

/* const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one);
console.log(two);
console.log(rest); */ 

//---------------------------------------

//함수 parameter에서의 rest

/* function sum(a, b, c, d, e, f, g) {
    let sum = 0;
    if (a) sum += a;
    if (b) sum += b;
    if (c) sum += c;
    if (d) sum += d;
    if (e) sum += e;
    if (f) sum += f;
    if (g) sum += g;
    return sum;
  }
  
  const result = sum(1, 2, 3, 4, 5, 6);
  console.log(result); */
//-------------------------
 /* function sum(...rest) { // 함수에서 ...rest(rest 아니고 다른거 여도됨)를 입력시에는 아래 선언된 배열을 받아온다.
    return rest.reduce((acc, current) => acc + current, 0); // reduce 함수를 통해 sum 연산을 하여 결과값 도출
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6)); */

  //---------------------------------------

/* function subtract(x, y) { //함수에서 받아오는 값이 (subtract(x, y)) parameter가 됨
    return x - y;
}

const result = subtract(5, 2); // subtract(5,2) 이 부분이 인자가 됨(함수를 사용할때 넣어주는 것)
console.log(result); */

  //---------------------------------------

  //함수의 인자에서의 spread

  /* function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0); 
  }
  
  const numbers = [1,2,3,4,5,6,7,8];
  console.log(sum(...numbers)); */

  //---------------------------------------
  //test - 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
  
  function max(...numbers) {
    return numbers.reduce (
      
      (acc, current) => (current > acc ? current : acc),
      numbers[0]
    );
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);
  


