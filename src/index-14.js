//함수의 기본 파라미터 

 /*function calculateCircleArea(r = 1) { //파라미터값이 없을시에 기본값 설정 방법 ex. (r = 1)
    // const radius = r || 1; //단축 논리 계산식의 OR 연산을 통해 구현 가능
    // return Math.PI * radius * radius;
    return Math.PI * r * r;
} 

const area = calculateCircleArea();
console.log(area); */

//--------------------------------------------

/* const calculateCircleArea = (r = 1) => Math.PI * r * r; // 화살표 함수 사용시 
const area = calculateCircleArea();
console.log(area); */

//---------------------------------------------------------------------------------------------------------------------------------------

//조건문 더 스마트하게 사용하기

// 1. OR 연산자를 사용

/* function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
        
        );
}

console.log(isAnimal('개'));
console.log(isAnimal('노트북')); */

//--------------------------------------------

// 1-1. 배열을 사용고 배열 내장 함수 includes를 사용하여 배열내에 포함되면 true 포함 안되면 false

/* function isAnimal(text) {
    const animals = ['고양이','개', '거북이', '너구리'];
    return animals.includes(text);
}

console.log(isAnimal('개'));
console.log(isAnimal('노트북')); */

//--------------------------------------------
// 1-2. 화살표 함수를 사용

/*const isAnimal = text => ['고양이','개', '거북이', '너구리'].includes(text);

console.log(isAnimal('개'));
console.log(isAnimal('노트북')); */

//--------------------------------------------

// 2. if 문 / switch 문 사용 

/* function getSound(animal) {
    //switch 문
    switch(animal) {
        case '개': return '멍멍!';
        case '고양': return '야오오오옹!!';
        case '참새': return '째짹!!';
        case '비둘기': return '구궁!';
        default: return '...??';
    }
    // if 문
    // if (animal === '개') return '멍멍!';
    // if (animal === '고양이') return '야옹~';
    // if (animal === '참새') return '짹짹';
    // if (animal === '비둘기') return '구구 구 구';
    // return '...?'
}

    console.log(getSound('개'));
    console.log(getSound('비둘기'));
    console.log(getSound('인간')); */

//--------------------------------------------

// 2-1. 객체 활용 
    
    /* function getSound(animal) {
        const sounds = {
            개: '멍멍!',
            고양이: '야옹~',
            참새: '짹짹',
            비둘기: '구구구구국~'
        };
        return sounds[animal] || '...?' // 객체 활용시 함수 키값 받아올때 [키값] 사용.
    }
  
        console.log(getSound('개'));
        console.log(getSound('비둘기'));
        console.log(getSound('인간')); */

//--------------------------------------------

function makeSound(animal) {
    const tasks = {
      개() {
        console.log('멍멍');
      },
      고양이() {
        console.log('고양이');
      },
      비둘기() {
        console.log('구구 구 구');
      }
    };
    if (!tasks[animal]) {
      console.log('...?');
      return;
    }
    tasks[animal]();
  }
  
  makeSound('개');
  makeSound('비둘기');