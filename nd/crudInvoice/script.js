// script.js
const invoiceForm = document.getElementById('invoice-form');
const invoiceList = document.getElementById('invoice-list');
const addItemBtn = document.getElementById('add-item-btn');
const submitBtn = document.getElementById('submit-btn');
const invoiceTotalElement = document.getElementById('invoice-total');
let editingInvoiceId = null;
let items = [];

const loadInvoices = async () => {
    try {
        const response = await fetch('https://in3.dev/inv/');
        const invoices = await response.json();
        renderInvoices(invoices);
    } catch (error) {
        console.error('Error loading invoices:', error);
    }
};

const renderInvoices = (invoices) => {
    invoiceList.innerHTML = '';
    invoices.forEach(invoice => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${invoice.invoice_number} - ${invoice.date} - $${invoice.total}
            <button onclick="editInvoice(${invoice.id})">Edit</button>
            <button onclick="deleteInvoice(${invoice.id})">Delete</button>
        `;
        invoiceList.appendChild(li);
    });
};

const editInvoice = (id) => {
    fetch(`https://in3.dev/inv/${id}`)
        .then(response => response.json())
        .then(invoice => {
            editingInvoiceId = invoice.id;
            document.getElementById('invoice-id').value = invoice.id;
            document.getElementById('invoice-number').value = invoice.invoice_number;
            document.getElementById('invoice-date').value = invoice.date;
            document.getElementById('customer-name').value = invoice.customer_name;
            document.getElementById('customer-address').value = invoice.customer_address;
            items = invoice.items || [];
            renderItems();
            updateTotal();
            submitBtn.textContent = 'Update Invoice';
        });
};

const deleteInvoice = async (id) => {
    if (confirm('Are you sure you want to delete this invoice?')) {
        try {
            await fetch(`https://in3.dev/inv/${id}`, {
                method: 'DELETE',
            });
            loadInvoices();
        } catch (error) {
            console.error('Error deleting invoice:', error);
        }
    }
};

const handleFormSubmit = async (event) => {
    event.preventDefault();

    const invoiceData = {
        invoice_number: document.getElementById('invoice-number').value,
        date: document.getElementById('invoice-date').value,
        customer_name: document.getElementById('customer-name').value,
        customer_address: document.getElementById('customer-address').value,
        items: items,
        total: parseFloat(invoiceTotalElement.textContent),
    };

    try {
        if (editingInvoiceId) {
            // Update existing invoice
            await fetch(`https://in3.dev/inv/${editingInvoiceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invoiceData),
            });
            editingInvoiceId = null;
            submitBtn.textContent = 'Create Invoice';
        } else {
            // Create new invoice
            await fetch('https://in3.dev/inv/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invoiceData),
            });
        }
        loadInvoices();
        resetForm();
    } catch (error) {
        console.error('Error saving invoice:', error);
    }
};

const addItem = () => {
    const itemName = prompt('Enter item name:');
    const price = parseFloat(prompt('Enter item price:'));
    const quantity = parseInt(prompt('Enter quantity:'), 10);
    const total = price * quantity;

    items.push({ itemName, price, quantity, total });
    renderItems();
    updateTotal();
};

const renderItems = () => {
    const tableBody = document.querySelector('#items-table tbody');
    tableBody.innerHTML = '';

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.itemName}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${item.total.toFixed(2)}</td>
            <td><button class="delete-item" onclick="deleteItem(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
};

const deleteItem = (index) => {
    items.splice(index, 1);
    renderItems();
    updateTotal();
};

const updateTotal = () => {
    const total = items.reduce((acc, item) => acc + item.total, 0);
    invoiceTotalElement.textContent = total.toFixed(2);
};

const resetForm = () => {
    document.getElementById('invoice-form').reset();
    items = [];
    renderItems();
    updateTotal();
};

addItemBtn.addEventListener('click', addItem);
invoiceForm.addEventListener('submit', handleFormSubmit);

loadInvoices();
