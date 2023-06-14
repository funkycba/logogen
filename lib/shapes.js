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

  return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Triangle extends Shape {
    // constructor(color){
    //     this.color = color
    // }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Square extends Shape{
    // constructor(color){
    //     this.color = color
    // }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
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