"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.create = function (t) {
        EmployeeManager.listEmployee.push(t);
    };
    EmployeeManager.prototype.read = function () {
        return EmployeeManager.listEmployee;
    };
    EmployeeManager.prototype.delete = function (index) {
        EmployeeManager.listEmployee.splice(index - 1, 1);
    };
    EmployeeManager.prototype.update = function (index, t) {
        EmployeeManager.listEmployee[index] = t;
    };
    EmployeeManager.listEmployee = [];
    return EmployeeManager;
}());
var manage = new EmployeeManager();
var employee1 = new Employee_1.Employee('bob', 'bi', new Date('11-22'), 'American', 'staff');
var employee2 = new Employee_1.Employee('bob2', 'bi2', new Date('11-22'), 'Japan', 'staff');
var employee3 = new Employee_1.Employee('bob3', 'bi3', new Date('11-22'), 'InDog', 'staff');
var newEmployee1 = new Employee_1.Employee('bobfix', 'bi', new Date('11-22'), 'American', 'staff');
manage.create(employee1);
manage.create(employee2);
manage.create(employee3);
manage.update(1, newEmployee1);
console.log(manage.read());
