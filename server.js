require('console.table');
const fs = require("fs");
const inquirer = require('inquirer');
const db = require('./db');




var allRoles = [];
var allEmployees= [];



function menu() {
  inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'menu',
      message: 'what would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    }
  ])
  .then((answers) => {
    if(answers.menu === 'view all departments') {
      viewDep();
    }
    if(answers.menu === 'view all roles') {
      viewRol();
    }
    if(answers.menu === 'view all employees') {
      viewEmp();
    }
    if(answers.menu === 'add a department') {
      addDep();
    }
    if(answers.menu === 'add a role') {
      addRol()
    }
    if(answers.menu === 'add an employee') {
      addEmp()
    }
    if(answers.menu === 'update an employee role') {
      updateEmp()
    }
  })
};

function viewDep() {
  db.findDep()
  .then(([allDepartments]) => {
    console.table(allDepartments);
    menu();
  })

  
}

function addDep() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?"
    }
  ])
    .then(res => {
      let name = res;
      db.createDep(name)
        .then(() => console.log(`Added ${name.name} to the database`))
        .then(() => menu())
    })
}

function viewRol() {
  db.findDep()
  .then(([allRoles]) => {
    console.table(allRoles);
    menu();
  })
}

function viewEmp() {
  db.findEmp()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => menu());
}

function addDep() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'depName',
        message: 'Enter Department Name Here'
      }
    ]).then((answers) => {
      let depName = answers.depName
      db.createDep(depName)
        .then(() => console.log(`Added ${depName.name} to the database`))
        .then(() => menu())
    })
}

function addRol() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Enter Department ID Here'
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter Title Here'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter Salary Here'
      },
      {
        type: 'input',
        name: 'depId',
        message: 'Enter Department ID Here'
      },
    ]).then((answers) => {
      let role = new Role
    })
}

function addEmp() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Enter Department ID Here'
      },
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter First Name'
      },
      {
        type: 'input',
        name: 'lastNAme',
        message: 'Enter Last Name'
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter Role ID Here'
      },
      {
        type: 'input',
        name: 'managId',
        message: 'Enter Manager ID Here'
      },
    ]).then((answers) => {
      let emplyee = new Employee
    })
}

menu();


