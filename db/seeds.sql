use employees_db;

INSERT INTO department (name)
VALUES ("Tech"),
       ("Human Resources"),
       ("Managment"),
       ("Maintenance");

INSERT INTO role (title, salary, department_id)
VALUES ("front-end dev", 60000, 1),
       ("back-end dev", 80000, 1),
       ("HR-rep", 50000, 2),
       ("call operator", 40000, 2),
       ("manager", 95000, 3),
       ("assistant manager", 85000, 3),
       ("IT", 70000, 4),
       ("Maintenance worker", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Blankenship", 5, NULL),
       ("John", "Apple", 1, 1),
       ("Aries", "Ramos", 2, 1),
       ("Kai", "Cantu", 6, 1),
       ("Antonio", "Beavin", 8, 1),
       ("Scrathics", "PS4chat", 7, 1),
       ("Lee", "Latino", 4, 1),
       ("john", "Smith", 3, 1); 