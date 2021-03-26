//비구조화 할당(구조 분해)

/* const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2 */

//--------------------------------------------

/* const object = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object); */

//--------------------------------------------
//비구조화 할당시-1
/* const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object); */


//--------------------------------------------
//비구조화 할당시-2
/* const object = { a: 1 };

const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2*/

//--------------------------------------------

/* const animal = {
    name: '크리스',
    type: '개'
};

const { name: nickname } = animal; // 비구조화 할당시 name을 nickname으로 바꾸는 방법
console.log(nickname);
console.log(animal.name); */

//--------------------------------------------
//배열 비구조화 할당

 /*const array = [1, 2];           //const array = [1, 2]; 
const [one, two] = array;       //const one = array[0];
                                //const one = array[1];
console.log(one);               // console.log(one);
console.log(two);               // console.log(two); */
// -------------------------------
// 기본값 지정 가능
/* const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);*/

//--------------------------------------------
//깊은값 비구조 할당-1
/* const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };

  const {name, languages} = deepObject.state.information; // .을 붙이는 행위는 .을 통해 properties에 접근한다는 의미.
  const { value } = deepObject;

  const extracted = {
      name,
      languages,
      value
  };
  console.log(extracted); */

//--------------------------------------------
//깊은값 비구조 할당-2
const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
  const {
    state: {
      information: { name, languages }
    },
    value
  } = deepObject;
  
  const extracted = {
    name,
    languages,
    value
  };
  
  console.log(extracted);

//--------------------------------------------