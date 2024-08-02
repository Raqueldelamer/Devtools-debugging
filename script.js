// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log('message');

// Error 2: better way -> actionButton.onclick = eventHandler;
let button = document.querySelector('#actionButton'); 
button.addEventListener('click', eventHandler); 


// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'Yay!! You clicked the button!';
}

// Error 6: Misusing variable scope
function localMessage() {
  let localMessage = 'Updated message';
  console.log(localMessage); 
}


// Error 7:
document.addEventListener('click', testFunction)

function testFunction() {
  document.getElementById("testButton").innerHTML = "Test function executed";
  console.log('Test function executed');
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: 
let nullVar = 8;
console.log(nullVar.length);

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log("importantData");

// Error 12: 
function tryToCall() {
  console.log('Try to call!');
  
}

// Error 13:
let userName = 'Alice';
console.log(userName)

// Error 14: 
let someNumber = 123;
console.log(someNumber); 

// Error 15: 
let greeting = "Hello, world!";


// Error 16: 
let i = 0; 
if (i < 5 === i++); {
    console.log(i);
}

// Error 17:
let five = 5;
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}

// Error 18:
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
}

let numbers = 1;
console.log(numbers);

// Error 19:
let x = 5;
console.log(x);

// Error 20:
let myString = 'Hello'; 
myString.property = 'World'; 

console.log("myString" + "myString.property");