// if문 / else / else if

/* const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log('if문 안의 a 값은'  + a)
}
  console.log('if문 밖의 a 값은'  + a) */
// 영역 밖과 안의 const 상수명이 같더라도 영역이 다르므로 사용가능!!

/* const a = 20;
if (a > 15) {
  console.log('a가 15보다 큽니다.');
} else {
  console.log('a가 15보다 크지 않습니다.');
} */

const a = 7;

if (a === 5) {
  console.log('5입니다!');
} else if (a === 10) {
  console.log('10 입니다!');
} else if (a === 7) {
  console.log('7입니다!');
} else {
  console.log('1에서 9의 숫자범위에 없습니다!');
}
