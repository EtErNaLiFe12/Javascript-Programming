//배열

/* const array = [1,'안녕',3,'야',{}];  
console.log(array[4]);

const objects = [
    { name: '멍멍이'}, 
    { name: '야옹이'}
];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]); */

//배열 내장함수

const objects = [
    { name: '멍멍이'}, 
    { name: '야옹이'}
];

console.log(objects.length); //.length가 들어가면 배열의 길이가 출력됨

objects.push({ //push는 배열안에 새롭게 추가할때 사용
    name: '멍뭉이'
});

console.log(objects.length);

//배열은 여러가지 종류를 넣을수 있음

const array = [1, true, {a:1}, [1,2,3,4]];
array.push(6);
console.log(array);
console.log(array.length);