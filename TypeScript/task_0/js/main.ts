// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create student variables
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    
    // Create table headers
    const firstNameHeader = headerRow.insertCell();
    const locationHeader = headerRow.insertCell();
    
    firstNameHeader.innerText = 'First Name';
    locationHeader.innerText = 'Location';

    // Populate the table with student data
    students.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        const locationCell = row.insertCell();
        
        firstNameCell.innerText = student.firstName;
        locationCell.innerText = student.location;
    });

    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
