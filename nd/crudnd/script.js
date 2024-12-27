const API_URL = 'https://in3.dev/inv/';
const STORAGE_KEY = 'invoices';

async function showCreateInvoice() {
    document.getElementById('invoice-list-container').style.display = 'none';
    document.getElementById('create-invoice-container').style.display = 'block';
    const invoice = await fetchNewInvoice();
    if(!invoice) return;
    displayInvoiceForm(invoice, 'new-invoice-data', true);
}

async function fetchNewInvoice() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('data could not be retrieved');
        const data = await response.json();
        return data;
    } catch (error) {
        showMessage('error while retrieving data from api', 'error');
        console.error(error);
        return null;

    }
}

function displayInvoiceForm(invoice, containerId, isEditable = false) {
    const container = document.getElementById(containerId);
    let html = `
        <div>
            <label>Invoice Number: ${invoice.number}</label>
        </div>

        <div>
            <label>Date: ${invoice.date}</label>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Total</th>
                </tr>

            </thead>

            <tbody> 
    `;

    invoice.items.forEach((item, index) => {
            let itemTotal = item.quantity;
            let discount = 0;
            if (item.discount.type === 'fixed') {
                discount = item.discount.value;
            } else if (item.discount === 'percentage') {
                discount = item.price * (item.discount.value / 100);
            } 

            const totalPerRow = item.quantity * (item.price-discount);
            html += `
                <tr>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${discount}</td>
                    <td>${totalPerRow.toFixed(2)}</td>
                </tr>
            `;
    });

    html += `
            </tbody>
        </table>
    
    `;
    container.innerHTML = html;
}


