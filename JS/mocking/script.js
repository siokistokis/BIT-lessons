document.getElementById('add-item').addEventListener('click', addItem);
document.getElementById('generate-pdf').addEventListener('click', generatePDF);
document.getElementById('reset-form').addEventListener('click', resetForm);

let items = [];
let subtotal = 0;
let vat = 0;
let discount = 0;

function addItem() {
    const description = document.getElementById('item-description').value;
    const unitPrice = parseFloat(document.getElementById('unit-price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (description && unitPrice && quantity) {
        const total = unitPrice * quantity;
        items.push({ description, unitPrice, quantity, total });
        updateInvoice();
    }
}

function updateInvoice() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.description}</td>
            <td>${item.unitPrice}</td>
            <td>${item.quantity}</td>
            <td>${item.total}</td>
        `;
        itemsList.appendChild(row);
    });

    subtotal = items.reduce((sum, item) => sum + item.total, 0);
    vat = parseFloat(document.getElementById('vat').value) / 100 * subtotal;
    discount = parseFloat(document.getElementById('discount').value);

    document.getElementById('subtotal-price').textContent = subtotal.toFixed(2);
    document.getElementById('vat-price').textContent = vat.toFixed(2);
    document.getElementById('discount-price').textContent = discount.toFixed(2);
   
