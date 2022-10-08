INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Account Manager", 80000.00, 2),
       ("Accountant", 65000.00, 2),
       ("Lawyer", 150000.00, 3),
       ("Legal Team Lead", 175000.00, 3),
       ("Lead Engineer"120000.00, 1),
       ("Software Engineer"90000.00, 1),
       ("Sales Lead"75000.00, 4),
       ("Salesperson"60000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "De Gea", 4,),
       ("Diogo", "Dalot", 3, 4),
       ("Raphael", "Varane", 3, 4),
       ("Lisandro", "Martinez", 1,),
       ("Tyrell", "Malacia", 2, 1),
       ("Christian", "Eriksen", 5,),
       ("Scott", "McTominay", 8, 7),
       ("Bruno", "Fernandes", 8, 7),
       ("Marcus", "Rashford", 7,),
       ("Jadon", "Sancho", 6, 5),
       ("Anthony", "Martial", 6, 5);

