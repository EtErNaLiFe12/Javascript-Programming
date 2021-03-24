// 논리연산자!!

/* 1. NOT ! 우선순위 1번
   2. AND && 우선순위 2번
   3. OR ||  우선순위 3번
            */
// 1. NOT !
/* const a = !false;
   console.log(a); */

// 2. AND &&
// const a = true && true; = true
// const a = true && false; = false
// const a = false && false; = false
// console.log(a);

// 3. OR ||
// const a = true || false; = true
// const a = true || true; = true
// const a = false || false; = false
// console.log(a);

const value = !((true && false) || (true && false) || !false);
console.log(value);
//  const value = !(t && f || t && f || t)
//  const value = !(f || f || t)
//  const value = !(true) =》 false
