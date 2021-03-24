// 함수

// ---------------------------------------
function add(a, b) {
  return a + b;
}
const sum = add(1, 2);
console.log(sum);

// ---------------------------------------

const added = (e, f) => {
  return e + f;
};
const sume = added(10, 2);
console.log(sume);

// ---------------------------------------

const ad = (g, h) => g + h;
const sumde = ad(5, 2);
console.log(sumde);

// ---------------------------------------

function hello(name) {
  console.log('Hello, ' + name + '!');
}
hello('velopert');

// ---------------------------------------

function hi(name) {
  return `hello ${name}!`;
}
const result = hi('velopert!!');
console.log(result);
// ---------------------------------------

const hola = (nickname) => {
  console.log(`hello ${nickname}!`);
};
hola('velopert!');

// ---------------------------------------

function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else {
    return 'F';
  }
}

const grade = getGrade(50);
console.log(grade);
