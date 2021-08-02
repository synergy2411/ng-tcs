"use strict";
exports.__esModule = true;
exports.MAGIC_NUMBER = exports.add = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.sayHello = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
function add(num1, num2) { return num1 + num2; }
exports.add = add;
exports.MAGIC_NUMBER = Math.round(Math.random() * 100);
