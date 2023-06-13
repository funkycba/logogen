# logogen

## How it is constructed
    There are 4 prompts that will pop up when activating the app on terminal. Each function for the prompts are categorized by names that are titled on js files listed in the library folder. Logogen will then create a logo in reference to your answers. An .svg file should be added into your VS at the end of the process.

    A shapes.js file is responsible for establishing the classes for the triangle, square, and circle shapes and rendering their position and size. A gitignore is created listing as followed: "node_modules/", and ".DS_Store/Type". Then type into the terminal "npm i" to have the package-lock added along with package.json. An index.js is added which stores the prompted questions that will lead to an init function rendering an svg. The svg will stem from the class within a seperate file titled "svg.js." svg.js will take the input of the text, colors and shapes into account as well as claiming what version of svg will be used. There is also a statement for the text to not exceed 3 characters.

### Video
    There is a seperate walkthrough video that should help clarify how to execute the program and create your own svg logo. The link is posted below to click on:
