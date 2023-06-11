const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const questions = [{
    name: "text",
    type: "input",
    message: "Create a title",
},
{
    name: "textcolor",
    type: "input",
    message: "Create a title",
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
    message: "Create a title",
}
]
const generateSVG = ({ text, textcolor, shape, shapecolor }) =>

function init() {
    inquirer.prompt(questions) // this should run the inquirer prompt.
      .then((answers) => writeFile("index.html", generateSVG(answers)))
      .then(() => console.log('Successfully wrote'))
      .catch((err) => console.error(err));
  }