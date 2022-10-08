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
})

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
}