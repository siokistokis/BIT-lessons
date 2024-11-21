// script.js

// Sample data
const invoiceData = {
    customerName: 'John Doe',
    items: [
        { description: 'Product 1', price: 20.00, quantity: 2 },
        { description: 'Product 2', price: 15.00, quantity: 1 },
        { description: 'Product 3', price: 30.00, quantity: 3 },
    ]
};

// Populate invoice with data
function populateInvoice() {
    document.getElementById('customer-name').textContent = invoiceData.customerName;

    const itemsList = document.getElementById('items-list');
    let totalAmount = 0;

    invoiceData.items.forEach(item => {
        const row = document.createElement('tr');
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        row.innerHTML = `
            <td>${item.description}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;
        itemsList.appendChild(row);
    });

    document.getElementById('invoice-total').textContent = totalAmount.toFixed(2);
}

window.onload = populateInvoice;

// PDF generation logic
document.getElementById('generate-pdf').addEventListener('click', () => {
    const invoiceElement = document.getElementById('invoice');
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(invoiceElement, {
        callback: function (doc) {
            doc.save('invoice.pdf');
        },
        margin: [10, 10, 10, 10],
    });
});
