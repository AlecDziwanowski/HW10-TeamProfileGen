// Uses inquirer to run the prompts
const inquirer = require('inquirer');
// Calls file system so we can use associated functions
const fs = require('fs');
// Calls prompts.js file to access list of prompts
const managerPrompts = require('./prompts');

// Call the function that prompts the user
init();

function init() {
    inquirer
        // Pulls in prompts to display to the user
        .prompt(managerPrompts)
        // Destructures the array of user inputs to be inputted into new HTML file
        .then(({ projectName, projectDesc, installDep, needToKnow, guidelines, runTests, license, gitHub, email }) => {
            // Generate README file using user inputs
            let responseText = ``;
            // Write the previous text to a new file named README.md
            fs.writeFile('team.html', responseText, err =>
                err ? console.error(err) : console.log('Generating Web page...'))
        });
}

// Get the badge and link for the specific license that the user indicated that they wanted to use
// function generateBadge(license) {
//     let licenseBadge;
//     switch (license) {
//         case "MIT":
//             licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
//             break;
//         case "Apache 2.0":
//             licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//             break;
//         case "GPL 3.0":
//             licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
//             break;
//         case "BSD 3":
//             licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
//             break;
//         default:
//             licenseBadge = "";
//             break;
//     }
//     return licenseBadge;
// }