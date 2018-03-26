/*Наследование классов в JavaScript*/
function Animal(name){
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed){
  this.speed +=speed;
  console.log( this.name + ' бежит, скорость ' + this.speed );
}

Animal.prototype.stop = function(){
  this.speed = 0;
  console.log(this.name + ' стоит');
}

function Rabbit(name){
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function(){
  this.speed++;
  console.log(this.name + ' прыгает');
}

Rabbit.prototype.run = function(){
  Animal.prototype.run.apply(this, arguments);
  this.jump();
  // console.log(this.name + ' прыгает');
}


var rabbit = new Rabbit('Кроль');

console.log(rabbit.run(100));
// console.log(rabbit.speed);
// console.log(rabbit.stop());



/*Статические и фабричные методы--------------------------------*/

function User(userData){
  if(userData){
    this.name = userData.name;
    this.age = userData.age;
  }
}



var str = String.fromCharCode(100);
console.log(str);

function Journal(date){
  this.date = date;

  // this.formatDate = function(date){
  //   return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  // };

  this.getTitle = function(){
    return "Выпуск от " + this.formatDate(this.date);
  };
}

Journal.compare = function(journalA, journalB){
  return journalA.date - journalB.date;
}

Journal.formatDate = function(date){
  return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
}

//использование
var journals = [
  new Journal(new Date(2012, 10, 1)),
  new Journal(new Date(2013, 0, 1)),
  new Journal(new Date(2011, 11, 1))
];

function findMin(journals){
  var min = 0;
  for(var i = 0; i < journals.length; i++){
      if(Journal.compare(journals[min], journals[i]) > 0){
        min = i;
      }
      return journals[min];
  }
}

// console.log(findMin(journals).getTitle());
console.log(Journal.formatDate(new Date));




/*Методы объектов, this--------------------------------*/
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      //alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9


console.log(" ");
/*Модули через замыкания--------------------------------*/
console.log("Модули через замыкания");


(function(){
  var message = "Привет";
  function showMessage(){
    console.log(message);
  }
  showMessage();
})();

console.log(" ");
/*Локальные переменные для объекта--------------------------------*/
console.log("7. Локальные переменные для объекта");

var arr = [1, 2, 3, 4, 5, 6, 7];



var users = [{
  name: "Вася",
  surname: "Иванов",
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 18
}, {
  name: "Маша",
  surname: 'Чапаев',
  age: 23
}];

// сделать сортировку по массиву объектов
users.sort(byField(name));

function byField(field){
  return function(a, b){
    a.field > b.field ? 1 : -1;
  }
}

users.forEach(function(user){
  console.log(user.name);
});



function makeBuffer(piece){
  var text = '';

  function string (piece){
    if ( arguments.length == 0 ) {
      return text;
    }
    return text += piece;
  };

  string.clear = function(){
    text = '';
  }

  return string;
};

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log( buffer() );
buffer.clear();
console.log( 'buffer: ' + buffer() );


function sum(a){
  return function(b){
    return a + b;
  }
}

console.log('sum: ' + sum(1)(5));

function makeCount1(){
  var currentCount = 1;

  function counter(){
    return currentCount++;
  }
  counter.set = function(value){
    currentCount = value;
  }
  counter.reset = function(){
    currentCount = 1;
  }

  return counter;


}
var counterrr = makeCount1();

console.log( counterrr() );
console.log( counterrr() );
counterrr.set(5)
console.log( counterrr() );
console.log(" ");
/*------------------------------------------------------------*/

/*6. [[Scope]] для new Function--------------------------------*/
// console.log("6. [[Scope]] для new Function");
// var a = 1;
// function getFunc(){
//   var a = 2;
//   var func = new Function('','console.log(a)');
//   return func;
// }
//
// getFunc()();
// console.log(" ");


/*------------------------------------------------------------*/

/*5. замыкания, область видимости--------------------------------*/
// console.log("5. замыкания, область видимости");
// var phrase = "Hello"
// function sayHi(name){
//   console.log(phrase + ' ' + name);
// }
// sayHi('John');
// phrase = "Goodbye"
// sayHi('Bob');
//
// function sayHiBye(firstName, lastName){
//   // LexicalEnvironment
//   //getFullName.[[Scope]] = объект переменных текущего запуска sayHiBye
//   console.log("Hello " + getFullName());
//   console.log("Goodbye " + getFullName());
//
//   function getFullName (){
//     // LexicalEnvironment
//     return firstName + ' ' + lastName;
//   }
//
// }
// sayHiBye('John', "Doe");
//
// function makeCount(){
//   var currentCount = 1;
//   return function(){
//       return currentCount++;
//   }
// }
//
// var counter = makeCount();
// console.log("count" + counter());
// console.log("count" + counter());
// var counterNew = makeCount();
// console.log("counterNew" + counterNew());
// console.log(" ");
/*------------------------------------------------------------*/
