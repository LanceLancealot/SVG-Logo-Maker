// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render an SVG string with the correct color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    
    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    
    expect(shape.render()).toEqual(expectedSVG);
  });
});

describe('Circle', () => {
  it('should render an SVG string with the correct color', () => {
    const shape = new Circle();
    shape.setColor('red');
    
    const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />';
    
    expect(shape.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  it('should render an SVG string with the correct color', () => {
    const shape = new Square();
    shape.setColor('green');
    
    const expectedSVG = '<rect x="50" y="50" width="100" height="100" fill="green" />';
    
    expect(shape.render()).toEqual(expectedSVG);
  });
});
