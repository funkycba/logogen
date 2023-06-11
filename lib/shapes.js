//class for each shape
// contains render and constructor function
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// make questions, then prompt questions. Make corresponding constructors save results.(fs package)
// const questions = [{
//     name: "text",
//     type: "input",
//     message: "Create a title",
// },
// {
//     name: "text color",
//     type: "input",
//     message: "Create a title",
// },
// {
//     name: "shape",
//     type: "list",
//     message: "Choose your shape",
//     choices: ["square", "circle", "triangle"]
// },
// {
//     name: "shape color",
//     type: "input",
//     message: "Create a title",
// }
// ]

class Circle {
    constructor(color) {
        this.color = color;
    }
    render() {

        return `<circle cx="50" cy="75" r="25" fill="${this.color}"/>`
    }
}
class Triangle {
    constructor(color){
        this.color = color
    }
    render() {
        return `<polygon points="0 25,50 50,100 25,"fill=${this.color}"`
    }
}
class Square {
    constructor(color){
        this.color = color
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" "fill=${this.color}"/>`
    }
}

module.exports