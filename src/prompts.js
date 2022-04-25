// Creates prompts regarding the team manager for the user
const managerPrompts = [
    {
        type: 'input',
        message: 'Please enter your team name (e.g. Team Hasselhoff):',
        name: 'teamName',
    },
    {
        type: 'input',
        message: 'Please enter your team Manager\'s Name (e.g. David Hasselhoff):',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Please enter your team Manager\'s employee id (e.g. 1):',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter your team Manager\'s email address (e.g. DHasselhoff@aim.com):',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your team Manager\'s office number (e.g. 240):',
        name: 'officeNumber',
    },
];
    // array of ppl
    // destructure response object in .then
    // when" =>
    // call new Employee/manager/etc in .then functions



    //     type: 'list',
    //         choices: [
    //             'Engineer',
    //             'Intern',
    //             'Finish Team',
    //         ],

    //     type: 'input',
    //     type: 'input',
    //     type: 'input',
    //     type: 'input',

    //     type: 'input',
    //     type: 'input',
    //     type: 'input',
    //     type: 'input',
    // },

// const prompts = [
//     {
//         type: 'input',
//         message: 'Project Name:',
//         name: 'projectName'
//     },
//     {
//         type: 'input',
//         message: 'Project Description:',
//         name: 'projectDesc'
//     },
//     {
//         type: 'list',
//         message: 'Command to install dependencies:',
//         choices: ['npm i'],
//         name: 'installDep'
//     },
//     {
//         type: 'input',
//         message: 'Need-to-knows for repository:',
//         name: 'needToKnow'
//     },
//     {
//         type: 'input',
//         message: 'Contribution guidelines:',
//         name: 'guidelines'
//     },
//     {
//         type: 'list',
//         message: 'Command to run tests:',
//         choices: ['npm test'],
//         name: 'runTests'
//     },
//     {
//         type: 'list',
//         message: 'License:',
//         choices: [
//             'MIT',
//             'APACHE 2.0',
//             'GPL 3.0',
//             'BSD 3',
//             'none'
//         ],
//         name: 'license'
//     },
//     {
//         type: 'input',
//         message: 'GitHub username:',
//         name: 'gitHub'
//     },
//     {
//         type: 'input',
//         message: 'Email:',
//         name: 'email'
//     }
// ];

// export the prompts array for use in index.js
module.exports = managerPrompts, engIntPrompts;