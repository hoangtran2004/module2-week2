"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Staff");
var Main = /** @class */ (function () {
    function Main() {
        this.listStaff = [];
    }
    Main.prototype.create = function (t) {
        this.listStaff.push(t);
    };
    Main.prototype.delete = function (index) {
        this.listStaff.splice(index - 1, 1);
    };
    Main.prototype.read = function () {
        return this.listStaff;
    };
    Main.prototype.readName = function (staff) {
        console.log(staff);
    };
    return Main;
}());
var manage = new Main();
var staff1 = new Staff_1.Staff('bob1', 0, new Date('11-1-1111'), '0123344', '1234@');
var staff2 = new Staff_1.Staff('bob2', 0, new Date('11-1-1111'), '0123344', '1234@');
var staff3 = new Staff_1.Staff('bob3', 0, new Date('11-1-1111'), '0123344', '1234@');
manage.create(staff1);
manage.create(staff2);
manage.create(staff3);
manage.readName(staff2);
