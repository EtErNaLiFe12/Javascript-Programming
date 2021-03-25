// 프로토 타입과 클래스

/* 1. 객체 생성자 - 객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값
      혹은 함수들을 구현 할 수 있게 해줍니다. 참고로 객체생성자를 만들시에는 앞에 대문자를 쓴다. */

      /* function Animal(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
        this.say = function() {
          console.log(this.name);
        };
      }
      
      const dog = new Animal('개', '멍멍이', '멍멍');
      const cat = new Animal('고양이', '야옹이', '야옹');
      
      dog.say();
      cat.say();*/

// -----------------------------------------------------------------------------------------------------------
    // 1-1. prototype

      /* function Animal(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
      }
      
      Animal.prototype.say = function() {
        console.log(this.sound);
      };
      Animal.prototype.sharedValue = 1;
      
      const dog = new Animal('개', '멍멍이', '멍멍');
      const cat = new Animal('고양이', '야옹이', '야옹');
      
      dog.say();
      cat.say();
      
      console.log(dog.sharedValue);
      console.log(cat.sharedValue); */

    //2. 객체 생성자 상속받기

    /* function Animal(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
      }
      
      Animal.prototype.say = function() {
        console.log(this.sound);
      };
      Animal.prototype.sharedValue = 1;
      
      function Dog(name, sound) {
        Animal.call(this, '개', name, sound);
      }
      Dog.prototype = Animal.prototype;
      
      function Cat(name, sound) {
        Animal.call(this, '고양이', name, sound);
      }
      Cat.prototype = Animal.prototype;
      
      const dog = new Dog('멍멍이', '멍멍');
      const cat = new Cat('야옹이', '야옹');
      
      dog.say();
      cat.say(); */

    //3. 클래스

    /* class Animal {
        constructor(type, name, sound) {
          this.type = type;
          this.name = name;
          this.sound = sound;
        }
        say() {
          console.log(this.sound);
        }
      }
      class Dog extends Animal {
          constructor(name, sound) {
              super('개', name, sound);
          }
      }

      class Cat extends Animal {
        constructor(name, sound) {
            super('야옹이', name, sound);
        }
    }

      
      const dog = new Dog('멍멍이', '멍멍');
      const cat = new Cat('야옹이',  '야옹');
      
      dog.say();
      cat.say(); */

      //3-1. FOOD 클래스

      class Food {
        constructor(name) {
          this.name = name;
          this.brands = [];
        }
        addBrand(brand) {
          this.brands.push(brand)
        }
        print() {
          console.log(`${this.name}을/를 파는 음식점들:`)
          console.log(this.brands.join(', '));
        }
      }
      
      const pizza = new Food('피자');
      pizza.addBrand('피자헛');
      pizza.addBrand('도미노 피자');
      
      const chicken = new Food('치킨');
      chicken.addBrand('굽네치킨');
      chicken.addBrand('BBQ');
      
      pizza.print()
      chicken.print();