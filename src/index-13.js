//단축 평가 논리 계산법 : 논리연산자를 이용해서 코드를 더 짧게 사용하는방법

/* true && true // true
true && false // false
true || false // true
false || false // false

//AND && 연산자는 좌측이 TRUE OR TRUTHY한 값일 경우 우측의 값이 결과값이 됨. (FALSE OR FALSY한 값이면은 좌측이 결과값이 됨)
console.log(true && 'hello'); // true한 값이므로 뒤에 hello가 출력
console.log(false && 'hello'); // false한 값이므로 hello가 출력이 안되고 false로 출력
console.log('bye' && 'hello'); // truthy한 값 이므로 뒤에 hello가 출력
console.log(null && 'hello'); // falsy한 값 이므로 null이 출력
console.log(undefined && 'hello'); // falsy한 값 이므로 undefined가 출력
console.log('' && 'hello'); // falsy한 값 이므로 공백이 출력
console.log(0 && 'hello'); // falsy한 값 이므로 0이 출력
console.log(1 && 1); // true한 값 이므로 1이 출력 */

// 특정값이 유효할때만 어떠한 값을 줘야되는 상황에 사용.

/* const object = { name: 2};
const namee = object.name;
console.log(namee);

//--------------------------------------------

const objects = {nm : 5}; // 이 객체가 false 인지 true 인지에 따라 값을 출력 또는 미출력
const nm = objects && objects.nm;
console.log(nm); */

//--------------------------------------------

/* const dog = {
    name: '멍멍이'
};

function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
}

const name = getName();
console.log(name); */

//--------------------------------------------

/* const cat = {
    name: '미야옹'
};

function getName(dongmule) {
    return dongmule && dongmule.name;
}

const nickname = getName(cat);
console.log(nickname); */

//--------------------------------------------

/* const namelessDog = {
    name: '',
};
function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
        return '이름이 없는 동물입니다.';
    }
    return name;
}

const name = getName(namelessDog);
console.log(name); */

//--------------------------------------------

//OR 연산자 - 어떠한 값이 없을시에 다른값을 지목하여 사용할때 유용함.
console.log(1 || false); // 좌측 값이 TRUE일 경우 우측을 안보고 좌측값이 결과값이 됨.
console.log(false || 'gum'); // 좌측 값이 FALSE일 경우 우측값이 결과값이 됨.

//--------------------------------------------

const namelessDog = {
    name: '',
};
function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name);

