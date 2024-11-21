// DOM Elements
const companyNameInput = document.getElementById('company-name');
const companyAddressInput = document.getElementById('company-address');
const companyPhoneInput = document.getElementById('company-phone');
const customerNameInput = document.getElementById('customer-name');
const itemDescriptionInput = document.getElementById('item-description');
const unitPriceInput = document.getElementById('unit-price');
const quantityInput = document.getElementById('quantity');
const addItemButton = document.getElementById('add-item');
const itemsList = document.getElementById('items-list');
const totalPriceElement = document.getElementById('total-price');
const companyNamePreview = document.getElementById('company-name-preview');
const companyAddressPreview = document.getElementById('company-address-preview');
const companyPhonePreview = document.getElementById('company-phone-preview');
const customerNamePreview = document.getElementById('customer-name-preview');
const generatePdfButton = document.getElementById('generate-pdf');
const resetFormButton = document.getElementById('reset-form');

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
    // Update company data
    companyNamePreview.textContent = companyNameInput.value || 'N/A';
    companyAddressPreview.textContent = `Address: ${companyAddressInput.value || 'N/A'}`;
    companyPhonePreview.textContent = `Phone: ${companyPhoneInput.value || 'N/A'}`;

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
    const { jsPDF } = window.jsp;
});
