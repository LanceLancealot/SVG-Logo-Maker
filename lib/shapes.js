// lib/shapes.js
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      const points = '150, 18 244, 182 56, 182';
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      const cx = 150;
      const cy = 100;
      const radius = 80;
      return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      const x = 50;
      const y = 50;
      const sideLength = 100;
      return `<rect x="${x}" y="${y}" width="${sideLength}" height="${sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  