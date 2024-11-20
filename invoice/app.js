const apiUrl = "https://in3.dev/inv/";
async function fetchInvoiceData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderInvoice(data);
}

function renderInvoice(data) {
    //invoice details
    document.getElementById("invoiceNumber").textContent = data.number;
}

fetchInvoiceData();