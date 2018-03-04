/*Методы объектов, this--------------------------------*/
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};


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
