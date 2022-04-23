# 10 Object-Oriented Programming: Team Profile Generator
## Your Task
Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walk-through video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input 
WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated
```

## Getting Started
Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:
* `officeNumber`
* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:
* `school`
* `getSchool()`
* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

### Walk-through Video: 32%
* A walk-through video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
* The walk-through video must show all four tests passing from the command line.
* The walk-through video must demonstrate how a user would invoke the application from the command line.
* The walk-through video must demonstrate how a user would enter responses to all of the prompts in the application.
* The walk-through video must demonstrate a generated HTML file that matches the user input.

## Review
You are required to submit the following for review:

* A walk-through video that demonstrates the functionality of the application and passing tests.
* A sample HTML file generated using your application.
* The URL of the GitHub repository, with a unique name and a readme describing the project.



## To Do
* 2 parts: get code to work, then get user input to work with code
* write html that will be copied and pasted in js file, like README Generator
    * paste in pageTemplate.js as template string?
* delete team.html afterward
* determine if package.json needs:
    "test": "jest --verbose test/*", (specifically the test/* thing)
    "start": "node index.js",
    "reset": "node reset.js"
* determine what reset.js does
* classes inherit tests from employee.test.js
* list of questions at 3:51
* add validation for user inputs?