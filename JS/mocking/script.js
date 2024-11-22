const apiUrl = "https://in3.dev/inv/";

async function fetchInvoiceData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderInvoice(data);
}

function renderInvoice(data) {
    // Set invoice details
    document.getElementById("invoiceNumber").textContent = data.number;
    document.getElementById("invoiceDate").textContent = data.date;
    document.getElementById("invoiceTerm").textContent = data.paymentTerm;

    // Set seller details
    document.getElementById("sellerName").textContent = data.seller.name;
    document.getElementById("sellerAddress").textContent = data.seller.address;
    document.getElementById("sellerCode").textContent = data.seller.code;
    document.getElementById("sellerVAT").textContent = data.seller.vat;

    // Set buyer details
    document.getElementById("buyerName").textContent = data.buyer.name;
    document.getElementById("buyerAddress").textContent = data.buyer.address;
    document.getElementById("buyerCode").textContent = data.buyer.code;
    document.getElementById("buyerVAT").textContent = data.buyer.vat;

    // Render items in table
    const itemsTableBody = document.querySelector("#items tbody");
    let totalWithoutVAT = 0;
    let totalVAT = 0;
    let totalDiscount = 0;

    data.items.forEach(item => {
        const row = document.createElement("tr");

        // Calculate subtotal for the item
        const itemPrice = parseFloat(item.price);
        const itemQuantity = parseFloat(item.quantity);
        const itemDiscount = item.discount ? parseFloat(item.discount) : 0;
        const itemSubtotal = (itemPrice * itemQuantity) - itemDiscount;

        totalWithoutVAT += itemPrice * itemQuantity;
        totalDiscount += itemDiscount;
        totalVAT += itemSubtotal * 0.21;  // 21% VAT

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${itemQuantity}</td>
            <td>${itemPrice.toFixed(2)}</td>
            <td>${itemDiscount.toFixed(2)}</td>
            <td>${itemSubtotal.toFixed(2)}</td>
        `;

        itemsTableBody.appendChild(row);
    });

    // Set totals
    const transportationCosts = parseFloat(data.transportationCosts);
    const finalAmountWithVAT = totalWithoutVAT + totalVAT - totalDiscount + transportationCosts;

    document.getElementById("transportCosts").textContent = transportationCosts.toFixed(2);
    document.getElementById("rateWithoutVAT").textContent = totalWithoutVAT.toFixed(2);
    document.getElementById("VAT").textContent = totalVAT.toFixed(2);
    document.getElementById("total").textContent = finalAmountWithVAT.toFixed(2);
}

fetchInvoiceData();
