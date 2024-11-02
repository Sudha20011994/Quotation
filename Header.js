function createTable(rows, columns) {
    const table = document.getElementById("dynamicTable");

    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();  // Create a new row
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();  // Insert a new cell in the row
            cell.textContent = `Row ${i + 1} Col ${j + 1}`;  // Add text to each cell
        }
    }
}

// Create a table with 5 rows and 6 columns
createTable(5, 6);