
/*5. замыкания, область видимости--------------------------------*/
console.log("6. Методы объектов и контекст вызова");

console.log("-----------------------------------------------");
/*------------------------------------------------------------*/

/*5. замыкания, область видимости--------------------------------*/
console.log("5. замыкания, область видимости");
var phrase = "Hello"
function sayHi(name){
  console.log(phrase + ' ' + name);
}
sayHi('John');
phrase = "Goodbye"
sayHi('Bob');

function sayHiBye(firstName, lastName){
  // LexicalEnvironment
  //getFullName.[[Scope]] = объект переменных текущего запуска sayHiBye
  console.log("Hello " + getFullName());
  console.log("Goodbye " + getFullName());

  function getFullName (){
    // LexicalEnvironment
    return firstName + ' ' + lastName;
  }

}

sayHiBye('John', "Doe");
console.log("-----------------------------------------------");
/*------------------------------------------------------------*/
