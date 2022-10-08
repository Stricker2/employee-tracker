INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Account Manager', 90000.00, 2),
('Accountant', 50000.00, 2),
('Sales Lead', 80000.00, 4),
('Sales Rep', 60000.00, 4),
('Senior Developer', 150000.00, 1),
('Junior Developer', 70000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('David', 'De Gea', 1, null),
('Harry', 'Maguire', 2, 1),
('Christian', 'Eriksen', 3, null),
('Jadon', 'Sancho', 4, 3),
('Marcus', 'Rashford', 5, null),
('Anthony', 'Martial', 6, 5);

