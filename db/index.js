const connection = require('./connection')

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findDep() {
        return this.connection.promise().query(
          "SELECT department.id, department.name FROM department;"
        );
    }

    createDep(department) {
        return this.connection.promise().query(
            "INSERT INTO department SET `", department
        );
    }

    removeDep(departmentId) {
        return this.connection.promise().query(
          "DELETE FROM department WHERE id = ?",
          departmentId
        );
    }

    findRol() {
        return this.connection.promise().query(
          "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    createRol(role) {
        return this.connection.promise().query(
            "INSERT INTO role SET ?", role
        );
    }

    removeRole(roleId) {
        return this.connection.promise().query(
            "DELETE FROM role WHERE id = ?", roleId
        );
    }

    findEmp() {
        return this.connection.promise().query(
          "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    createEmp(employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }

    removeEmp(employeeId) {
        return this.connection.promise().query(
          "DELETE FROM employee WHERE id = ?", employeeId
        );
      }

}

module.exports = new DB(connection)