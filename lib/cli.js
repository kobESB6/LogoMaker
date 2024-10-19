const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "logoText",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",
        },
        {
          name: "logoTextColor",
          type: "input",
          message: "Enter a text color",
        },
        {
          name: "selectedShapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then(({ logoText, logoTextColor, selectedShapeType, shapeColor }) => {
        let logoShape;
        switch (selectedShapeType) {
          case "circle":
            logoShape = new Circle();
            break;

          case "square":
            logoShape = new Square();
            break;

          default:
            logoShape = new Triangle();
            break;
        }
        logoShape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(logoText, logoTextColor);
        svg.setShape(logoShape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.", error);
      });
  }
}



module.exports = CLI;
