var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName); // Return the formatted string
};
// Function to create a new Teacher
function createTeacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience, additionalProperties) {
    var teacher = __assign({ firstName: firstName, lastName: lastName, fullTimeEmployee: fullTimeEmployee, location: location, yearsOfExperience: yearsOfExperience }, additionalProperties // Spread to add additional properties
    );
    return teacher;
}
// Function to create a new Director
function createDirector(firstName, lastName, fullTimeEmployee, location, numberOfReports, yearsOfExperience, additionalProperties) {
    var director = __assign({ firstName: firstName, lastName: lastName, fullTimeEmployee: fullTimeEmployee, location: location, numberOfReports: numberOfReports, yearsOfExperience: yearsOfExperience }, additionalProperties // Spread to add additional properties
    );
    return director;
}
// Implement the StudentClass
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return "Currently working"; // Method implementation
    };
    Student.prototype.displayName = function () {
        return this.firstName; // Method implementation
    };
    return Student;
}());
// Example usage
var teacher1 = createTeacher("Alice", "Johnson", true, "San Francisco", 5, { contract: true, department: "Math" });
var director1 = createDirector("Sarah", "Williams", true, "Los Angeles", 10, 8, { contract: true, division: "Education" });
