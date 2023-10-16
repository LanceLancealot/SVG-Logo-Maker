// index.js
const getUserInput = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');
const saveToFile = require('./lib/fileHandler');

async function main() {
  const userInput = await getUserInput();

  // Create the selected shape based on user input
  let shape;
  switch (userInput.shape) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape selected.');
      return;
  }

  shape.setColor(userInput.shapeColor);

  const svgString = shape.render();

  await saveToFile('logo.svg', svgString);

  console.log('Generated logo.svg');
}

main();
