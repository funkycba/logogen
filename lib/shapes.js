//class for each shape
// contains render and constructor function
class Shape {
    constructor(){
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
    // render(){
    //     return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`
    // }
}
class Circle extends Shape {
    // constructor(color) {
    //     this.color = color;
    // }
    render() {

        return `<circle cx="50" cy="75" r="25" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    // constructor(color){
    //     this.color = color
    // }
    render() {
        return `<polygon points="0 25,50 50,100 25,"fill=${this.color}"`
    }
}
class Square extends Shape{
    // constructor(color){
    //     this.color = color
    // }
    render() {
        return `<rect x="10" y="10" width="30" height="30" "fill=${this.color}"/>`
    }
}

// const generateSVG = {( text, textcolor, shape, shapecolor, )} => {

// }


// return `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>${title}</title>
//     <link rel="stylesheet" href="../dist/style.css" />
//   </head>
//   <body>
//     <div class="card">
//       ${header}
//       ${taskList}
//     </div>
//   </body>
// </html>
// `;

module.exports = {Square, Triangle, Circle};