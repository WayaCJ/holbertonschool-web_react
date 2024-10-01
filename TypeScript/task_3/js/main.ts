/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert row and store the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
