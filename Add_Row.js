// Function to add a new editable row
function addRow() {
    const table = document.getElementById("itemTable");
    const newRow = table.insertRow();
  
    // Define editable cells with initial placeholders
    const cells = [
      "Item", "Material", "Description", "Quantity", "Unit", "Unit Price", "Amount"
    ];
    cells.forEach((cell, index) => {
      const newCell = newRow.insertCell(index);
      newCell.contentEditable = true;
      newCell.innerText = index === 6 ? "$0.00" : "";
      if (cell === "Quantity" || cell === "Unit Price") {
        newCell.addEventListener("input", calculateAmount);
      }
    });
  
    // Add a delete button
    const actionCell = newRow.insertCell(cells.length);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => table.deleteRow(newRow.rowIndex);
    actionCell.appendChild(deleteButton);
  }
  
  // Function to calculate the Amount based on Quantity and Unit Price
  function calculateAmount(event) {
    const row = event.target.parentNode;
    const quantityCell = row.cells[3];
    const unitPriceCell = row.cells[5];
    const amountCell = row.cells[6];
  
    const quantity = parseFloat(quantityCell.innerText) || 0;
    const unitPrice = parseFloat(unitPriceCell.innerText) || 0;
    const amount = quantity * unitPrice;
  
    amountCell.innerText = `$${amount.toFixed(2)}`;
  }
  
  // Function to save table data to local storage or output it
  function saveData() {
    const table = document.getElementById("itemTable");
    const data = [];
  
    // Loop through rows and collect data
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const rowData = {
        item: row.cells[0].innerText,
        material: row.cells[1].innerText,
        description: row.cells[2].innerText,
        quantity: parseFloat(row.cells[3].innerText) || 0,
        unit: row.cells[4].innerText,
        unitPrice: parseFloat(row.cells[5].innerText) || 0,
        amount: parseFloat(row.cells[6].innerText.replace('$', '')) || 0,
      };
      data.push(rowData);
    }
  
    // Store data in local storage or log to console
    localStorage.setItem("itemTableData", JSON.stringify(data));
    console.log("Saved data:", data);
    alert("Data saved successfully!");
  }
  
  // Load data from local storage on page load
  function loadData() {
    const storedData = JSON.parse(localStorage.getItem("itemTableData"));
    if (storedData) {
      storedData.forEach(item => {
        const table = document.getElementById("itemTable");
        const newRow = table.insertRow();
       
        ["item", "material", "description", "quantity", "unit", "unitPrice", "amount", "pricingDate"].forEach((key, index) => {
          const cell = newRow.insertCell(index);
          cell.contentEditable = true;
          cell.innerText = key === "amount" ? `$${item[key].toFixed(2)}` : item[key];
          if (key === "quantity" || key === "unitPrice") {
            cell.addEventListener("input", calculateAmount);
          }
        });
  
        // Add delete button
        const actionCell = newRow.insertCell(8);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => table.deleteRow(newRow.rowIndex);
        actionCell.appendChild(deleteButton);
      });
    }
  }
  
  // Load data on page load
  window.onload = loadData;