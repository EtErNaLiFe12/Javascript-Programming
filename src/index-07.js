//객체

// const dogName = '멍멍이'
// console.log(dogName);

// ---------------------------------

// const dog = {
//   name: '멍멍이',
//   age: 2,
//   'key with space' : 'kws',
// }
// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);

// ---------------------------------

/* const ironMan = {
  name: 'tony stark',
  actor: 'robert downy junior',
  alias: 'ironMan'
}

const { name } = ironMan;
console.log(name);

console.log(ironMan);

//파라메터를 사용하는 단계에서 비구조 할당 문법 사용
//function print({alias, name, actor }) { 
function print(hero) {
  const {alias, name, actor } = hero; //비구조 할당 문법
  const text =  `${alias}(${name}) 역할을 맡은 배우는 ${actor}`
  console.log(text);
} 

print(ironMan); */

//---------------------------------------------

/* const cat = {
  name: '나비',
  sound: '미야옹!',
  say() {
    console.log(this.sound);
  }
};

const dog = {
  name: '크리스',
  sound: '멍멍'
};

dog.say = cat.say; // dog.say에 cat의 say()를 연결해줌

cat.say(); //함수 호출시 this 즉 자신을 가르키므로 미야옹!이 출력
dog.say(); //함수 호출시 역시나 this를 통해 자신을 가르키므로 멍멍 출력

const catSay = cat.say; //새로운 상수를 만들어 cat.say값을 넣어서 함수를 꺼냈을때
catSay(); //함수를 꺼낼시에는 this의 관계가 사라짐 그러므로 에러 발생 */

//---------------------------------------------

// getter & setter 함수

/* //getter 함수 - 조회하려 할때 특정 코드를 실행시키고 연산된 값을 받아 사용하는 것
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  } 
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum); */

//---------------------------------------------

// getter & setter 함수

/* const dog = {
  _name: '멍멍이',
  set name(value) {
    console.log('이름이 바뀝니다..' + value);
    this._name = value;
  }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name); */

//---------------------------------------------

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
numbers.a = 12;
console.log(numbers.sum);
numbers.b = 15;
console.log(numbers.sum);
