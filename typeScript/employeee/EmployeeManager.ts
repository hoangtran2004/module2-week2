import {Employee} from "./Employee";

class EmployeeManager {
    static listEmployee: Employee[] = [];

    constructor() {
    }

    create(t: Employee): void {
        EmployeeManager.listEmployee.push(t)
    }

    read() {
        return EmployeeManager.listEmployee
    }

    delete(index: number) {
        EmployeeManager.listEmployee.splice(index - 1, 1)
    }

    update(index: number, t: Employee) {
        EmployeeManager.listEmployee[index-1] = t;
    }

}

