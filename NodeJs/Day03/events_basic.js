// const EventEmitter = require('node:events');
// const myEmitter = new EventEmitter();

// myEmitter.on('Hello', () => {
//     console.log("Hi");
// });

// myEmitter.on('Buy', () => {
//     console.log("Your product is added to cart ");
// });

// myEmitter.on('where', (productID) => {
//     console.log("Delhi", productID);
// });


// myEmitter.emit("Hello");


// readline-->nodejs

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your name? ', (answer) => {
//     console.log(`Hello, ${answer}!`);
//     rl.close(); // Always close the interface when done
// });

rl.setPrompt('Enter a line (type "exit" to quit): ');
rl.prompt();

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    rl.close();
  } else {
    console.log(`You said: ${input}`);
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});