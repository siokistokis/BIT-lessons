const apiUrl = "https://in3.dev/inv/";
async function fetchInvoiceData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderInvoice(data);
}

function renderInvoice(data) {
    //invoice details
    document.getElementById("invoiceNumber").textContent = data.number;
    document.getElementById('invoiceDate').textContent = data.date;
    document.getElementById('invoiceTerm').textContent = data.due_date;
    // Seller.
    document.getElementById("sellerName").textContent = data.company.seller.name;
    document.getElementById("sellerAddress").textContent = data.company.seller.address;
    document.getElementById("sellerCode").textContent = data.company.seller.code;
    document.getElementById("sellerVAT").textContent = data.company.seller.vat;
    document.getElementById("sellerPhoneNr").textContent = data.company.seller.phone;
    document.getElementById("sellerEmailAddress").textContent = data.company.seller.email;

    // Buyer
    document.getElementById("buyerName").textContent = data.company.buyer.name;
    document.getElementById("buyerAddress").textContent = data.company.buyer.address;
    document.getElementById("buyerCode").textContent = data.company.buyer.code;
    document.getElementById("buyerVAT").textContent = data.company.buyer.vat;
    document.getElementById("buyerPhoneNr").textContent = data.company.buyer.phone;
    document.getElementById("buyerEmailAddress").textContent = data.company.buyer.email;

    //items
    const itemsTableBody = document.querySelector("#items tbody");
    let subtotal = 0;
    let itemNo = 0;
    let currencySymbol = "£";
    let totalRateWithoutVAT = 0;
    data.items.forEach(item => {
        const tr = document.createElement("tr");
        const discountValue = calculateDiscount(item.price, item.discount);
        const subtotal = (item.price - discountValue) * item.quantity;
        totalRateWithoutVAT += subtotal;
        const rowHtml = `
            <td>${++itemNo}</td>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td class="money-column">${item.price.toFixed(2)}${currencySymbol}</td>
            <td class="money-column">${formatDiscount(discountValue, item.discount, currencySymbol)}</td>
            <td class="money-column">${subtotal.toFixed(2)} ${currencySymbol}</td>
        `;
        tr.innerHTML = rowHtml;
        itemsTableBody.appendChild(tr);
    });
    //Shipping

    document.getElementById('transportCosts').textContent = ` ${data.shippingPrice.toFixed(2)} ${currencySymbol}`;
    totalRateWithoutVAT += data.shippingPrice;
    document.getElementById('rateWithoutVAT').textContent = ` ${totalRateWithoutVAT.toFixed(2)} ${currencySymbol}`;
    const vat = totalRateWithoutVAT * 0.21;
    document.getElementById('VAT').textContent = ` ${vat.toFixed(2)} ${currencySymbol}`;
    document.getElementById('total').textContent = ` ${(totalRateWithoutVAT + vat).toFixed(2)}${currencySymbol}`;
}

function calculateDiscount(price, discount) {
    if (!discount || Object.keys(discount).length === 0) return 0;
    if (discount.type === 'percentage'){
        return price * discount.value / 100;

    } else if (discount.type === 'fixed') {
        return discount.value;
    }
    return 0;

}

function formatDiscount(discountValue, discount, currencySymbol) {
    if (!discount || Object.keys(discount).length === 0) return `0.00 ${currencySymbol}`;
    if (discount.type === 'percentage'){
        return `-${discount.value}% or -${discountValue.toFixed(2)}${currencySymbol}`;

    } else if (discount.type === 'fixed') {
        return `-${discount.value.toFixed(2)}${currencySymbol}`;
    }
    return 0;
}




fetchInvoiceData();




//document.getElementById("").textContent = data.
// function renderInvoice(data) {
//     //invoice details
//     document.getElementById("invoiceDate").textContent = data.number;
// }

// fetchInvoiceData();

