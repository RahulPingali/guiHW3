/*
File: script.js
GUI Assignment: Multiplication Table Web Page
Rahul Pingali, UMass Lowell Computer Science, rahul_pingali@student.uml.edu 
What it does:  This file contains the JavaScript code for the Multiplication Table Web Page.
It contains two functions: genTable() and createMultiplicationTable(). the genTable() function
is called when the user clicks the "Generate Table" button. It reads the values from the input
fields and calls the createMultiplicationTable() function. The createMultiplicationTable() function
creates the multiplication table based on the input values and appends it to the tableContainer div.
The table is created with the values from the input fields. The table is created with the values from the input fields.
There is error handling set up to ensure that no non-integer values are entered, and also 
that the start and end value are in a reasonable range.
Copyright (c) 2024 by Rahul. All rights reserved. May be freely copied or 
excerpted for educational purposes with credit to the author.
updated by RP on June 3rd, 2024 at 9:20 PM
*/




function genTable() {
    const beginH = parseInt(document.getElementById('beginH').value);
    const endH = parseInt(document.getElementById('endH').value);
    const beginV = parseInt(document.getElementById('beginV').value);
    const endV = parseInt(document.getElementById('endV').value);
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = ''; 

    if (isNaN(beginH) || isNaN(endH) || isNaN(beginV) || isNaN(endV)) {
        errorMessage.textContent = 'Please enter valid numbers';
        return;
    }

    if (beginH > endH || beginV > endV) {
        errorMessage.textContent = 'Start values must be less than or equal to end values';
        return;
    }

    if (beginH < -50 || endH > 50 || beginV < -50 || endV > 50) {
        errorMessage.textContent = 'Values must be between -50 and 50';
        return;
    }

    console.log('Start Horizontal:', beginH);
    console.log('End Horizontal:', endH);
    console.log('Start Vertical:', beginV);
    console.log('End Vertical:', endV);

    createMultiplicationTable(beginH, endH, beginV, endV);
}

function createMultiplicationTable(beginH, endH, beginV, endV) {
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; 
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = ''; 

    if (beginH > endH || beginV > endV) {
        errorMessage.textContent = 'Start values must be less than or equal to end values';
        return;
    }

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // Empty corner cell

    for (let h = beginH; h <= endH; h++) {
        let th = document.createElement('th');
        th.textContent = h;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let v = beginV; v <= endV; v++) {
        let row = document.createElement('tr');
        let th = document.createElement('th');
        th.textContent = v;
        row.appendChild(th);

        for (let h = beginH; h <= endH; h++) {
            let td = document.createElement('td');
            td.textContent = h * v;
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}
