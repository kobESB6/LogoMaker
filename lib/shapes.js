class Shape {
  constructor() {
    this.color = "";
  }
setColor(color) {
    this.color = color;
}
    
    logoShapeColor(color) {
        this.color = color;
    }

}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return ` <polygon points="100,10 180,290 20,290"  fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}



module.exports = { Circle, Triangle, Square };