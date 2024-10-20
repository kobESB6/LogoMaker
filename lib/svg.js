class SVG {
    constructor() {
    this.logoText ="";
    this.logoTextColor ="";
    this.logoShape = null;
}
setText(logoText, logoTextColor) {
    this.logoText = logoText;
    this.logoTextColor = logoTextColor;
}
setLogoShape(logoShape) {
    this.logoShape = logoShape;
}

setShape(shape) {
  this.logoShape = shape.render();  // Call the render method from the shape class
}


render() {
    return ` <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.logoShape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">
          ${this.logoText}
        </text>
      </svg>
    `;
  }
}

module.exports = SVG;