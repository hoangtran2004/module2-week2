"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, date, phoneNumber, email) {
        this.name = name;
        this.gender = gender;
        this.date = date;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    return Staff;
}());
exports.Staff = Staff;
