// import external packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// import team classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

// read main.html
const mainHTML = fs.readFileSync("./src/main.html", "utf8")

// array to store all employees
const team = [];

// function to obtain manager info
const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID number?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?"
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
      },
      {
        type: 'list',
        name: 'addEmployee',
        message: "What type of employee would you like to add?",
        choices: ['Engineer', 'Intern', 'None']
      }
    ])
    .then((mRes) => {
      // create manager object using responses
      const manager = new Manager(mRes.name, mRes.id, mRes.email, mRes.officeNumber);

      // add manager object to team array
      team.push(manager);
      
      // obtain info specific to the selected role
      if(mRes.addEmployee === 'Engineer') {
        engineerPrompt();
      } else if (mRes.addEmployee === 'Intern') {
        internPrompt();
      } else {
        generateHTML();
      }
    })
}
  
// function to obtain engineer info
const engineerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID number?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?"
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
      },
      {
        type: 'list',
        name: 'addEmployee',
        message: "What type of employee would you like to add?",
        choices: ['Engineer', 'Intern', 'None']
      }
    ])
    .then((eRes) => {
      // create engineer object using responses
      const engineer = new Engineer(eRes.name, eRes.id, eRes.email, eRes.github);
      
      // add engineer object to team array
      team.push(engineer);

      // obtain info specific to the selected role
      if(eRes.addEmployee === 'Engineer') {
        engineerPrompt();
      } else if (eRes.addEmployee === 'Intern') {
        internPrompt();
      } else {
        generateHTML();
      }
    })
}     
  
// function to obtain intern info
const internPrompt = () => {
  return inquirer
    .prompt([
      {
          type: 'input',
          name: 'name',
          message: "What is the intern's name?"
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the intern's ID number?"
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the intern's email address?"
        },
        {
          type: 'input',
          name: 'school',
          message: "What is the intern's school name?"
        },
        {
          type: 'list',
          name: 'addEmployee',
          message: "What type of employee would you like to add?",
          choices: ['Engineer', 'Intern', 'None']
        }
      ])
    .then((iRes) => {
      // create intern object using responses
      const intern = new Intern(iRes.name, iRes.id, iRes.email, iRes.school);
      
      // add intern object to team array
      team.push(intern);

      // obtain info specific to the selected role
      if(iRes.addEmployee === 'Engineer') {
        engineerPrompt();
      } else if (iRes.addEmployee === 'Intern') {
        internPrompt();
      } else {
        generateHTML();
      }
    })
  }
  
// function to intialize data input
const init = () => {
  console.log("Please build your team");
  managerPrompt();
};

// function to render HTML from team array
const renderHTML = (team) => {
return team.map(a => a.createHTML()).join("");
}
  
// function to generate HTML file
const generateHTML = () => {
  
  // write HTML file using mainHTML and renderHTML
  fs.writeFile('./dist/team.html', mainHTML.replace("{{body}}", renderHTML(team)), (err) => {
    err ? console.log(err) : console.log('Successfully created team.html!');
  }); 
}

// initialize
init();
