const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config();

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

dbConnection.connect(err => {
    if (err) throw err;
    console.log('connected');
    promptUser();
});

const promptUser = () => {
    inquirer.prompt([
        {    
            name: 'choose',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update employee role'
            ]
        }
    ]).then((responses) => {
        const { choose } = responses;

        if (choose === 'View all departments') {
            viewDepartments();
        }

        if (choose === 'View all roles') {
            viewRoles();
        }

        if (choose === 'View all employees') {
            viewEmployees();
        }

        if (choose === 'Add a department') {
            addDepartment();
        }

        if (choose === 'Add a role') {
            addRole();
        }

        if (choose === 'Add an employee') {
            addEmployee();
        }

        if (choose === 'Update employee role') {
            updateEmployee();
        }
    })
};

const viewDepartments = () => {
    dbConnection.query('SELECT * FROM department ORDER BY name', (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    })
};

const viewRoles = () => {
    dbConnection.query('SELECT * FROM role ORDER BY title', (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    })
};

const viewEmployees = () => {
    dbConnection.query('SELECT * FROM employee ORDER BY first_name', (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    })
};

const addDepartment = () => {
    inquirer.prompt({
        type: 'input',
        name: 'addDept',
        message: 'Please state which department you wish to add'
    }).then(answer => {
        dbConnection.query('INSERT INTO department SET ?', {name: `${answer.addDept}`}, (err, res) => {
            if (err) throw err;
            console.log(`You have added the ${answer.addDept} department.`);
            promptUser();
        })
    });
};

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please state the title of the role you wish to add'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please state the salary of the role you wish to add'
        },
        {
            type: 'list',
            name: 'department',
            message: 'Please choose the department the role you wish to add belongs to'
        }
    ]).then(answer => {
        dbConnection.query('INSERT INTO role SET ?', {name: `${answer.Role}`}, (err, res) => {
            if (err) throw err;
            console.log(`You have added the ${answer.addDepartment} department.`);
            promptUser();
        })
    });
};