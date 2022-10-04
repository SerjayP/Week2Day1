/* Functions Continued


Things to remember
** DRY - Don't Repeat Yourself
** Good input (Garbage in)
*/

console.log(Date());
let sayHello = (name) => {
  if (typeof name !== "string"){
    console.log("Wrong data type, must be a string")
    return
  }

    console.log("Hello " + name + "!")

}
sayHello(98);

const add = (num1, num2) => num1 + num2;

  console.log(add(85256, 2))

  function areBothEven(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number"){
         console.log("Please enter a number")
    return
} else {


    return !(n1 & 2) && !(n2 & 2);
  }  
}
  console.log(areBothEven("4565", 11))