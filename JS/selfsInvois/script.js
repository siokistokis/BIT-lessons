// DOM Elements
const customerNameInput = document.getElementById('customer-name');
const itemDescriptionInput = document.getElementById('item-description');
const unitPriceInput = document.getElementById('unit-price');
const quantityInput = document.getElementById('quantity');
const addItemButton = document.getElementById('add-item');
const itemsList = document.getElementById('items-list');
const totalPriceElement = document.getElementById('total-price');
const customerNamePreview = document.getElementById('customer-name-preview');
const generatePdfButton = document.getElementById('generate-pdf');

// Store items in the invoice
let invoiceItems = [];

// Function to add item to the list
addItemButton.addEventListener('click', function () {
    const description = itemDescriptionInput.value;
    const unitPrice = parseFloat(unitPriceInput.value);
    const quantity = parseInt(quantityInput.value);

    if (!description || isNaN(unitPrice) || isNaN(quantity)) {
        alert('Please enter valid data for item.');
        return;
    }

    const total = (unitPrice * quantity).toFixed(2);
    invoiceItems.push({ description, unitPrice, quantity, total });

    updateInvoicePreview();
    resetInputFields();
});

// Function to reset input fields after adding an item
function resetInputFields() {
    itemDescriptionInput.value = '';
    unitPriceInput.value = '';
    quantityInput.value = '';
}

// Function to update invoice preview
function updateInvoicePreview() {
    // Update customer name
    customerNamePreview.textContent = customerNameInput.value || 'N/A';

    // Clear the current table
    itemsList.innerHTML = '';

    // Add items to the table
    let totalAmount = 0;
    invoiceItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.description}</td>
            <td>$${item.unitPrice.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${item.total}</td>
        `;
        itemsList.appendChild(row);
        totalAmount += parseFloat(item.total);
    });

    // Update total price
    totalPriceElement.textContent = totalAmount.toFixed(2);
}

// Function to generate and download the PDF
generatePdfButton.addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set up the PDF content
    doc.text("Invoice", 105, 10, null, null, 'center');
    doc.text(`Customer: ${customerNameInput.value}`, 20, 30);
    
    let yPosition = 40;
    invoiceItems.forEach(item => {
        doc.text(`Description: ${item.description}`, 20, yPosition);
        doc.text(`Unit Price: $${item.unitPrice.toFixed(2)}`, 100, yPosition);
        doc.text(`Quantity: ${item.quantity}`, 150, yPosition);
        doc.text(`Total: $${item.total}`, 200, yPosition);
        yPosition += 10;
    });

    doc.text(`Total Amount: $${totalPriceElement.textContent}`, 20, yPosition);

    // Save the PDF
    doc.save('invoice.pdf');
});
