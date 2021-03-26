//동기적(Synchronous) / 비동기적(Asynchronous)

//동기적 처리는 순차적으로 1번이 끝나면 2번, 2번이 끝나면 3번, 3번이 끝나면 4번 이런식으로 순차적 진행하는것이 동기적
//비동기적 처리는 코드를 실행시 흐름이 멈추지않고 동시에 여러가지 작업을 처리할수있고 기다리는 과정에서 함수 호출도 가능 하는 등.

/* function work() {
    const start = Date.now(); //Date.now() 함수는 js에 내장되어있는 기능으로써 현재 날짜를 숫자 형태로 표시해줌.
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  
  work();
  console.log('다음 작업'); */

//---------------------------------------

// 콜백함수 - 어떤 작업이 끝나고 나서 실행 해야 될 경우
  /* function work(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {

      }
      const end = Date.now();
      console.log(end - start + 'ms');
      callback(end - start)
    }, 0); //4ms 부터 시작(브라우져의 기본 셋팅값)
  }
  
  console.log('작업 시작!');
  work((ms) => {
      console.log('작업이 끝났어요!');
      console.log(ms + 'ms 걸렸다고 해요.')
  });
  console.log('다음 작업'); */

  //------------------------------------------------------------------------------------------------------------------

  //promise - 비동기 작업을 조금더 편하게 하기위해 추가됨 (ES6) 

  //callback 지옥
  /* function increaseAndPrint(n, callback) {
    setTimeout(() => {
      const increased = n + 1;
      console.log(increased);
      if (callback) {
        callback(increased);
      }
    }, 1000);
  }
  
  increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          increaseAndPrint(n, n => {
            console.log('끝!');
          });
        });
      });
    });
  }); */

//---------------------------------------

/* const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('result');
      }, 1000)
  });

  myPromise.then (result => {
      console.log(result);
  }) */

//---------------------------------------

/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    }, 1000)
});

myPromise.then (result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})*/

//---------------------------------------

/* function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) {
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);
      }, 1000);
    });
  }*/
  
//---------------------------------------

   /* increaseAndPrint(0).then((n) => {
    console.log('result: ', n);
  })

  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) {
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);
      }, 1000);
    });
  }
  
  increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
      console.error(e);
    }); */

 //------------------------------------------------------------------------------------------------------------------

//async / await

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초쉬고
    console.log('반갑습니다!');
  }
  
  process();

//--------------------------

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초쉬고
    console.log('반갑습니다!');
  }
  
  process().then(() => {
    console.log('작업이 끝났어요!');
  });

  //------------------------------------------

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
  }
  
  async function process() {
    try {
      await makeError();
    } catch (e) {
      console.error(e);
    }
  }
  
  process();

  //------------------------------------------

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
  }
  
  process();

  //------------------------------------------

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
  }
  
  process();

  //------------------------------------------

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const [dog, rabbit, turtle] = await Promise.all([
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
  }
  
  process();

  //------------------------------------------

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const first = await Promise.race([
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(first);
  }
  
  process();
