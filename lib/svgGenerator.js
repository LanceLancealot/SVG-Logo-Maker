class SVGGenerator {
    constructor(shapes) {
      this.shapes = shapes;
      this.text = '';
    }
  
    setText(text) {
      this.text = text;
    }
  
    generateSVG() {
      const shapesSVG = this.shapes.map(shape => shape.render()).join('\n');
      const textSVG = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30">${this.text}</text>`;
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapesSVG}${textSVG}</svg>`;
    }
  }
  
  module.exports = SVGGenerator;
  