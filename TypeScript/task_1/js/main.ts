// Define the Teacher interface

interface Teacher {
    readonly firstName:string; // Can only be set during initialization

    readonly lastName: string;  // Can only be set during initialization

    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;

    // Index signature to allow dynamic properties
    [key: string]: any; // Allows additional properties with any type
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number; // Required attribute
}

// Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string; // Takes two strings and returns a string
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`; // Return the formatted string
};

// Function to create a new Teacher
function createTeacher(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    additionalProperties?: { [key: string]: any }
): Teacher {
    const teacher: Teacher = {
        firstName,
        lastName,
        fullTimeEmployee,
        location,
        yearsOfExperience,
        ...additionalProperties // Spread to add additional properties
    };

    return teacher;
}

// Function to create a new Director
function createDirector(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    numberOfReports: number,
    yearsOfExperience?: number,
    additionalProperties?: { [key: string]: any }
): Directors {
    const director: Directors = {
        firstName,
        lastName,
        fullTimeEmployee,
        location,
        numberOfReports,
        yearsOfExperience,
        ...additionalProperties // Spread to add additional properties
    };

    return director;
}

// Class interface for Student
interface StudentClass {
    firstName: string; // Property to hold first name
    lastName: string; // Property to hold last name
    workOnHomework(): string; // Method to work on homework
    displayName(): string; // Method to display the student's name
}

// Implement the StudentClass
class Student implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working"; // Method implementation
    }

    displayName(): string {
        return this.firstName; // Method implementation
    }
}

// Example usage
const teacher1: Teacher = createTeacher(
    "Alice",
    "Johnson",
    true,
    "San Francisco",
    5,
    { contract: true, department: "Math" }
);

const director1: Directors = createDirector(
    "Sarah",
    "Williams",
    true,
    "Los Angeles",
    10,
    8,
    { contract: true, division: "Education" }
);
