
/*Локальные переменные для объекта--------------------------------*/
console.log("7. Локальные переменные для объекта");

function makeBuffer(){
  var text = '';

  return function(piece){
    if ( arguments.length == 0 ) {
      return text;
    }
    text += piece;
  };
};

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log( buffer() );


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
