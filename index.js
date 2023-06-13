const {Circle, Triangle, Square} = require('./lib/shapes.js');
// const shapes = new SVGImageElement();
const inquirer = require("inquirer")
const svg = require('./svg')
const { writeFile } = require('fs/promises')
// make questions, then prompt questions. Make corresponding constructors save results.(fs package)
const questions = [{
    name: "text",
    type: "input",
    message: "Insert text",
},
{
    name: "textcolor",
    type: "input",
    message: "What color text?",
},
{
    name: "shape",
    type: "list",
    message: "Choose your shape",
    choices: ["square", "circle", "triangle"]
},
{
    name: "shapecolor",
    type: "input",
    message: "Choose color for your shape",
}
]
function init() {
    inquirer.prompt(questions) // this should run the inquirer prompt.
      .then((answers) => writeFile('logo.svg', svg.render()))
      .then(() => console.log('Successfully wrote'))
      .catch((err) => console.error(err));
  }
init()